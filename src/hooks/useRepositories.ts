import { useEffect, useState } from "react";
import snapshot from "../data/github.json";
import type { Repository } from "../data/catalog";

type Data = { updatedAt: string; repos: Repository[] };
const key = "codepdbh-github-v1";
const ttl = 30 * 60 * 1000;
function valid(value: unknown): value is Data {
  if (!value || typeof value !== "object") return false;
  const data = value as Data;
  return (
    Number.isFinite(Date.parse(data.updatedAt)) &&
    Array.isArray(data.repos) &&
    data.repos.length > 0 &&
    data.repos.every(
      (repo) =>
        typeof repo.name === "string" &&
        typeof repo.stargazers_count === "number" &&
        typeof repo.html_url === "string" &&
        repo.html_url.startsWith("https://github.com/codepdbh/"),
    )
  );
}
function initialData(): Data {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(key) ?? "null");
    if (
      valid(data) &&
      Date.parse(data.updatedAt) > Date.parse(snapshot.updatedAt)
    )
      return data;
  } catch {
    /* Storage is optional. */
  }
  return snapshot;
}
export function useRepositories() {
  const [data, setData] = useState<Data>(initialData);
  const [status, setStatus] = useState<"saved" | "live" | "offline">("saved");
  useEffect(() => {
    const controller = new AbortController();
    let lastFetched = 0;
    async function refresh() {
      if (Date.now() - lastFetched < ttl) return;
      lastFetched = Date.now();
      const repos: Repository[] = [];
      try {
        for (let page = 1; ; page++) {
          const response = await fetch(
            `https://api.github.com/users/codepdbh/repos?per_page=100&sort=updated&page=${page}`,
            {
              signal: AbortSignal.any([
                controller.signal,
                AbortSignal.timeout(15000),
              ]),
              headers: { Accept: "application/vnd.github+json" },
            },
          );
          if (!response.ok) throw new Error("GitHub unavailable");
          const batch = await response.json();
          if (!Array.isArray(batch)) throw new Error("Invalid response");
          repos.push(
            ...batch
              .filter((repo) => !repo.private)
              .map((repo) => ({
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                fork: repo.fork,
                archived: repo.archived,
                pushed_at: repo.pushed_at,
              })),
          );
          if (batch.length < 100) break;
        }
        const next = { repos, updatedAt: new Date().toISOString() };
        if (!valid(next)) throw new Error("Invalid repository data");
        if (controller.signal.aborted) return;
        setData(next);
        setStatus("live");
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {
          /* Private browsing may reject storage. */
        }
      } catch {
        if (!controller.signal.aborted) setStatus("offline");
      }
    }
    void refresh();
    const interval = window.setInterval(() => {
      if (!document.hidden) void refresh();
    }, ttl);
    const onFocus = () => {
      void refresh();
    };
    window.addEventListener("focus", onFocus);
    return () => {
      controller.abort();
      clearInterval(interval);
      window.removeEventListener("focus", onFocus);
    };
  }, []);
  return { ...data, status };
}

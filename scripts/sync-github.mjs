import { writeFile } from "node:fs/promises";

// Only the public user endpoint is used; no private repositories enter the site.
const repos = [];
for (let page = 1; ; page++) {
  const response = await fetch(
    `https://api.github.com/users/codepdbh/repos?per_page=100&sort=updated&page=${page}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      signal: AbortSignal.timeout(20000),
    },
  );
  if (!response.ok)
    throw new Error(`GitHub: ${response.status}; existing snapshot preserved`);
  const batch = await response.json();
  if (!Array.isArray(batch)) throw new Error("Invalid GitHub response");
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
if (!repos.length)
  throw new Error("Empty GitHub response; existing snapshot preserved");
await writeFile(
  new URL("../src/data/github.json", import.meta.url),
  JSON.stringify({ updatedAt: new Date().toISOString(), repos }, null, 2) +
    "\n",
);
console.log(`Saved ${repos.length} public repositories.`);

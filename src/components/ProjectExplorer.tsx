import { useState } from "react";
import { ArrowDown, ArrowUpRight, Search, Star, X } from "lucide-react";
import { catalog, filters } from "../data/catalog";
import type { Entry, Filter, Repository } from "../data/catalog";
import imageManifest from "../data/project-images.json";

function RepoImage({
  project,
  featured = false,
}: {
  project: Entry;
  featured?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const asset = (
    imageManifest as Record<
      string,
      { file: string; source: string; kind: string }
    >
  )[project.name];
  const kind = asset?.kind ?? "preview";
  const description =
    kind === "preview"
      ? "Vista previa de GitHub"
      : kind === "screenshot"
        ? "Captura del repositorio"
        : "Imagen del repositorio";
  return (
    <figure
      className={`repo-image ${featured ? "repo-image-featured" : ""} image-${kind}`}
    >
      {failed ? (
        <span className="image-unavailable">{project.name}</span>
      ) : (
        <img
          src={
            asset
              ? `${import.meta.env.BASE_URL}${asset.file}`
              : `https://opengraph.githubassets.com/1/codepdbh/${encodeURIComponent(project.name)}`
          }
          alt={`${description}: ${project.title}`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {!featured && <figcaption>{description}</figcaption>}
    </figure>
  );
}

function Stars({ project }: { project: Entry }) {
  return (
    <a
      className="stars mono"
      href={`${project.html_url}/stargazers`}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.stargazers_count} estrellas de ${project.title}`}
    >
      <Star size={14} />
      {project.stargazers_count.toLocaleString("es")}
    </a>
  );
}
function Featured({ project, index }: { project: Entry; index: number }) {
  return (
    <article className={`featured featured-${index}`}>
      <div className="featured-top mono">
        <span>PORT / ANDROID</span>
        <Stars project={project} />
      </div>
      <a
        className="feature-title"
        href={project.html_url}
        target="_blank"
        rel="noreferrer"
        aria-label={project.title}
      >
        <RepoImage project={project} featured />
        <h3>{index === 0 ? "Most Wanted" : "Vice City Stories"}</h3>
      </a>
      <p>{project.summary}</p>
      <a
        className="feature-link"
        href={project.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Explorar el port <ArrowUpRight size={17} />
      </a>
    </article>
  );
}
const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export default function ProjectExplorer({
  repos,
  updatedAt,
  status,
}: {
  repos: Repository[];
  updatedAt: string;
  status: "live" | "saved" | "offline";
}) {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recent");
  const [limit, setLimit] = useState(10);
  const entries = catalog(repos);
  const matching = entries.filter(
    (entry) =>
      (filter === "Todos" || entry.group === filter) &&
      normalize(
        `${entry.title} ${entry.name} ${entry.summary} ${entry.technologies.join(" ")}`,
      ).includes(normalize(query.trim())),
  );
  matching.sort((a, b) =>
    sort === "stars"
      ? b.stargazers_count - a.stargazers_count ||
        a.title.localeCompare(b.title)
      : Date.parse(b.pushed_at) - Date.parse(a.pushed_at),
  );
  const showFeatured = filter === "Todos" && !query.trim() && sort === "recent";
  const featured = showFeatured
    ? ["nfsmw-android", "PSPRecomp-VCS-Android"].flatMap(
        (name) => entries.find((project) => project.name === name) ?? [],
      )
    : [];
  const rows = matching.filter(
    (project) => !featured.some((item) => item.name === project.name),
  );
  function reset() {
    setFilter("Todos");
    setQuery("");
    setLimit(10);
  }
  return (
    <section className="projects-section" id="proyectos">
      <div className="shell">
        <div className="section-title">
          <div>
            <span className="section-number mono">01 / TRABAJO ABIERTO</span>
            <h2>Proyectos &amp; ports</h2>
          </div>
          <div className="search">
            <Search size={17} />
            <input
              type="search"
              aria-label="Buscar proyectos"
              placeholder="Buscar proyectos…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setLimit(10);
              }}
            />
            {query && (
              <button
                aria-label="Borrar búsqueda"
                onClick={() => {
                  setQuery("");
                  setLimit(10);
                }}
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>
        <div className="filter-bar">
          <div className="filters" role="group" aria-label="Filtrar proyectos">
            {filters.map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                onClick={() => {
                  setFilter(item);
                  setLimit(10);
                }}
              >
                {item}
                <span>
                  {item === "Todos"
                    ? entries.length
                    : entries.filter((entry) => entry.group === item).length}
                </span>
              </button>
            ))}
          </div>
          <select
            aria-label="Ordenar proyectos"
            value={sort}
            onChange={(event) => {
              setSort(event.target.value);
              setLimit(10);
            }}
          >
            <option value="recent">Actividad reciente</option>
            <option value="stars">Más estrellas</option>
          </select>
        </div>
        {featured.length > 0 && (
          <div className="featured-grid">
            {featured.map((project, index) => (
              <Featured key={project.name} project={project} index={index} />
            ))}
          </div>
        )}
        <div className="results-meta mono">
          <span role="status">
            {matching.length} proyectos
            {filter !== "Todos" ? ` / ${filter}` : ""}
          </span>
          <span title={new Date(updatedAt).toLocaleString("es-BO")}>
            {status === "live"
              ? "Estrellas sincronizadas con GitHub"
              : status === "offline"
                ? "GitHub no disponible · última copia guardada"
                : "Estrellas · copia guardada"}{" "}
            · {new Date(updatedAt).toLocaleDateString("es-BO")}
          </span>
        </div>
        <div className="project-list">
          {rows.slice(0, limit).map((project) => (
            <article className="project-row" key={project.name}>
              <a
                className="project-thumbnail"
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Imagen de ${project.title}`}
              >
                <RepoImage project={project} />
              </a>
              <div className="project-name">
                <a href={project.html_url} target="_blank" rel="noreferrer">
                  <h3>{project.title}</h3>
                </a>
                <span className="mono">
                  {project.group}
                  {project.fork ? " / Fork" : ""}
                  {project.archived ? " / Archivado" : ""}
                </span>
              </div>
              <p>
                {project.summary}
                {project.demo && (
                  <a
                    className="demo-link"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver demo <ArrowUpRight size={12} />
                  </a>
                )}
              </p>
              <span className="language mono">{project.language ?? "—"}</span>
              <Stars project={project} />
              <a
                className="repo-arrow"
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${project.title} en GitHub`}
              >
                <ArrowUpRight size={20} />
              </a>
            </article>
          ))}
        </div>
        {matching.length === 0 && (
          <div className="empty">
            <h3>No hay proyectos con esa búsqueda.</h3>
            <p>Prueba otro nombre, lenguaje o categoría.</p>
            <button className="text-link" onClick={reset}>
              Restablecer filtros <X size={16} />
            </button>
          </div>
        )}
        {rows.length > limit && (
          <button
            className="load-more"
            onClick={() => setLimit((value) => value + 10)}
          >
            Ver más proyectos{" "}
            <span className="mono">{rows.length - limit} restantes</span>
            <ArrowDown size={16} />
          </button>
        )}
        <p className="project-note">
          Los ports se apoyan en el trabajo de sus comunidades originales.
          Créditos, requisitos y estado de cada adaptación en su repositorio.
        </p>
      </div>
    </section>
  );
}

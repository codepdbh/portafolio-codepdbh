import { projects } from "./projects";
import snapshot from "./github.json";

export type Repository = (typeof snapshot.repos)[number];
export const filters = [
  "Todos",
  "Ports",
  "Web",
  "Apps",
  "IA",
  "Juegos",
  "Herramientas",
] as const;
export type Filter = (typeof filters)[number];
export type Entry = Repository & {
  title: string;
  summary: string;
  group: Filter;
  technologies: string[];
  demo?: string;
};

const ports: Record<string, [string, string]> = {
  "nfsmw-android": [
    "NFS Most Wanted · Android",
    "Adaptación de Most Wanted para Android ARM64 con renderizado Vulkan, controles táctiles y soporte para mandos.",
  ],
  "PSPRecomp-VCS-Android": [
    "Vice City Stories · Android",
    "Port experimental de PSP a Android ARM64 mediante recompilación estática con PSPRecomp.",
  ],
  "PSPRecomp-LCS-Android": [
    "Liberty City Stories · Android",
    "Port nativo de GTA: Liberty City Stories para Android mediante recompilación estática de PSP.",
  ],
  "CBFD-Recompiled-Android-Evolved": [
    "Conker’s Bad Fur Day · Android",
    "Adaptación a Android de Conker’s Bad Fur Day Recompiled, a partir del proyecto de recompilación de N64.",
  ],
  "NFS3-HP-AndroidEvolved": [
    "NFS III: Hot Pursuit · Android",
    "Port comunitario nativo para Android ARM64, basado en motor-dev/nfs-recompiled.",
  ],
  "NFS-CARBON-360-DECOMP": [
    "NFS Carbon · Recompilación",
    "Recompilación estática experimental de la versión Xbox 360 con ReXGlue. Prototipo para Windows x64.",
  ],
  "re3-android-port-evolved": [
    "GTA III · Android Evolved",
    "Adaptación para Android del motor re3 de GTA III, basada en el trabajo de ingeniería inversa de la comunidad.",
  ],
  "revc-android-port-evolved": [
    "Vice City · Android Evolved",
    "Adaptación para Android del motor reVC de GTA Vice City.",
  ],
  "re3-gta-advance-port": [
    "GTA Advance PC · Android",
    "Port para Android de la conversión GTA Advance PC sobre el motor re3.",
  ],
  melee360: [
    "Super Smash Bros. Melee · Xbox 360",
    "Port nativo experimental para Xbox 360 con LibXenon y XeLL.",
  ],
  "xboxrecomp-conker": [
    "Conker: Live & Reloaded · Recompilación",
    "Trabajo experimental de recompilación estática de Xbox original.",
  ],
  "conker-bad-fur-day-pc": [
    "Conker’s Bad Fur Day · PC",
    "Port nativo y recompilación estática de N64 con RT64 y runtime Ultramodern.",
  ],
  "reVC-android-evolved-ENHANCED-MOD": [
    "Vice City Enhanced · Android",
    "Adaptación de la modificación Enhanced & Fixed sobre reVC Android Evolved.",
  ],
  "revc-long-night-experimental-port": [
    "Vice City: Long Night · Android",
    "Port experimental de la conversión de apocalipsis zombi Long Night para reVC.",
  ],
  "re3-frosted-winter-port-experimental": [
    "GTA III: Frosted Winter · Android",
    "Adaptación experimental de Frosted Winter Remastered sobre RE3 Android Evolved.",
  ],
  "re3-forelli-redemption": [
    "Forelli Redemption · Android",
    "Adaptación para Android de la conversión Forelli Redemption sobre re3/reVC.",
  ],
  "librw-re3-android": [
    "librw · Android",
    "Adaptación de la reimplementación del motor gráfico RenderWare para el ecosistema re3.",
  ],
  VCSPC: ["Vice City Stories PC", "Fork del proyecto Vice City Stories PC."],
};
const legacy = new Map(
  projects.map((project) => [
    project.repoUrl.split("/").pop()!.toLowerCase(),
    project,
  ]),
);
export function catalog(repos: Repository[]): Entry[] {
  return repos
    .filter((repo) => !["codepdbh", "portafolio-codepdbh"].includes(repo.name))
    .map((repo) => {
      const previous = legacy.get(repo.name.toLowerCase());
      const port = ports[repo.name];
      const categories = previous?.category ?? [];
      const group: Filter = port
        ? "Ports"
        : categories.includes("IA") || repo.name.includes("-ai-")
          ? "IA"
          : categories.includes("Flutter")
            ? "Apps"
            : categories.includes("Juegos")
              ? "Juegos"
              : categories.includes("Web")
                ? "Web"
                : "Herramientas";
      return {
        ...repo,
        title: port?.[0] ?? previous?.name ?? repo.name,
        summary:
          port?.[1] ??
          repo.description ??
          previous?.description ??
          "Código, documentación y avances disponibles en el repositorio.",
        group,
        technologies: port
          ? [
              repo.language ?? "C++",
              ...(repo.name.toLowerCase().includes("android")
                ? ["Android"]
                : []),
              "Ports",
            ]
          : (previous?.technologies ?? [repo.language ?? "Código"]),
        demo: previous?.demoUrl,
      };
    });
}

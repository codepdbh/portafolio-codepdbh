import { ArrowUpRight } from "lucide-react";
export default function Header() {
  return (
    <header className="shell header">
      <a className="wordmark" href="#inicio" aria-label="codepdbh, inicio">
        codepdbh<span>.</span>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#proyectos">Proyectos</a>
        <a href="#trayectoria">Trayectoria</a>
        <a href="https://github.com/codepdbh" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

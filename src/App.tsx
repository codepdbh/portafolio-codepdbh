import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectExplorer from "./components/ProjectExplorer";
import Background from "./components/Background";
import { ArrowUpRight } from "lucide-react";
import { useRepositories } from "./hooks/useRepositories";
export default function App() {
  const github = useRepositories();
  return (
    <>
      <a className="skip-link" href="#proyectos">
        Saltar a los proyectos
      </a>
      <Header />
      <main>
        <Hero />
        <ProjectExplorer {...github} />
        <Background />
      </main>
      <footer className="shell footer" id="contacto">
        <div>
          <h2>¿Construimos algo?</h2>
          <p>Ideas, proyectos y conversaciones sobre código.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/codepdbh"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight />
          </a>
          <a
            href="https://github.com/codepdbh"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight />
          </a>
        </div>
        <span className="mono">
          La Paz, Bolivia
          <br />
          codepdbh · {new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
}

import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="shell hero" id="inicio">
      <div className="hero-main">
        <h1>
          Software que
          <br />
          cruza
          <br />
          <em>plataformas.</em>
        </h1>
        <div className="hero-intro">
          <p>
            Soy <strong>Paulo Daniel Batuani Hurtado</strong>, ingeniero de
            sistemas. Desarrollo aplicaciones, adapto juegos y exploro nuevas
            formas de hacer que el software llegue más lejos.
          </p>
          <div className="hero-actions">
            <a className="button" href="#proyectos">
              Explorar proyectos <ArrowDown size={17} />
            </a>
            <a
              className="text-link"
              href={`${import.meta.env.BASE_URL}CV_Paulo_Daniel_Batuani_Hurtado_2026.pdf`}
              download
            >
              Descargar CV <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-meta mono">
        <span>La Paz, Bolivia</span>
        <span>C++ / Android / React / Flutter / Python</span>
      </div>
    </section>
  );
}

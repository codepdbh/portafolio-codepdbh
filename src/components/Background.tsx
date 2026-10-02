const roles = [
  [
    "FEB 2026 — ACTUALIDAD",
    "Desarrollador Full Stack",
    "CECASEM",
    "Soluciones institucionales, bases de datos, APIs, despliegues y soporte.",
  ],
  [
    "2023 — ACTUALIDAD",
    "Desarrollador de Sistemas",
    "Asociación Boliviana de Árbitros de Fútbol",
    "Plataforma deportiva para gestión administrativa, control y reportes.",
  ],
  [
    "JUN 2025",
    "Instructor en Inteligencia Artificial",
    "U. E. Don Bosco Pampahasi",
    "Formación docente en planificación, evaluación y creación de contenidos.",
  ],
  [
    "ENE — MAY 2025",
    "Ingeniero de Sistemas / GIS Full Stack",
    "Fundación COMPA · Ruta Sin Gluten",
    "PostGIS, React-Leaflet, OSRM, geolocalización y cálculo de rutas.",
  ],
  [
    "MAR — DIC 2024",
    "Especialista en Tecnologías de la Información",
    "Escuelas Populares Don Bosco",
    "Sistemas educativos, web institucional y enseñanza de programación.",
  ],
  [
    "2024",
    "Instructor en Inteligencia Artificial",
    "Consultora B&CG",
    "Productividad, automatización y análisis con herramientas de IA.",
  ],
  [
    "DIC 2023 — MAR 2024",
    "Pasantía en soluciones tecnológicas",
    "Witronix LED",
    "ERP Odoo, automatización KNX, redes y soporte técnico.",
  ],
];
function Role({ item }: { item: string[] }) {
  return (
    <article className="role">
      <span className="mono">{item[0]}</span>
      <h4>{item[1]}</h4>
      <p className="company">{item[2]}</p>
      <p>{item[3]}</p>
    </article>
  );
}
export default function Background() {
  return (
    <section className="shell background" id="trayectoria">
      <div className="bio">
        <span className="section-number mono">02 / TRAYECTORIA</span>
        <h2>Detrás del código.</h2>
        <p>
          Me interesa lo que pasa cuando el software encuentra un nuevo
          contexto: un juego en otra plataforma, una herramienta que simplifica
          el trabajo o una aplicación que conecta personas.
        </p>
        <p>
          Soy ingeniero de sistemas en La Paz. Mi trabajo combina desarrollo
          full stack, aplicaciones móviles, sistemas geográficos e inteligencia
          artificial aplicada.
        </p>
        <div className="skills">
          <span className="mono">CON LO QUE TRABAJO</span>
          <p>
            C++ · Java · Python · TypeScript
            <br />
            React · Next.js · Flutter · Node.js
            <br />
            PostgreSQL · PostGIS · Git
          </p>
        </div>
      </div>
      <div className="career">
        <h3>Experiencia</h3>
        {roles.slice(0, 3).map((item) => (
          <Role key={item[2]} item={item} />
        ))}
        <details>
          <summary>
            Más trayectoria <span>+</span>
          </summary>
          {roles.slice(3).map((item) => (
            <Role key={item[2]} item={item} />
          ))}
        </details>
      </div>
      <div className="education">
        <h3>Formación</h3>
        <article>
          <span className="mono">EN CURSO</span>
          <h4>Maestría en Inteligencia Artificial y Tecnologías Emergentes</h4>
          <p>Posgrado de la Escuela Militar de Ingeniería</p>
        </article>
        <article>
          <span className="mono">2023</span>
          <h4>Ingeniería de Sistemas</h4>
          <p>Escuela Militar de Ingeniería</p>
        </article>
        <article>
          <span className="mono">2024 · 800 HORAS</span>
          <h4>Diplomado en Educación Superior</h4>
          <p>Planificación y Desarrollo de Competencias Profesionales · EMI</p>
        </article>
        <details>
          <summary>
            Formación complementaria <span>+</span>
          </summary>
          <p>
            Hacking ético ofensivo · Red Team (43 h), Hacking Ético para
            Android, seguridad Cisco, Rust básico (15 h), desarrollo de
            videojuegos y Flutter Study Jam · GDG.
          </p>
          <p>
            Responsabilidad por la Función Pública (60 h), Políticas Públicas
            (20 h), Ley N.º 1178 (40 h) y Aymara básico (240 h).
          </p>
        </details>
        <div className="languages">
          <span className="mono">IDIOMAS</span>
          <p>
            Español nativo · Inglés B2
            <br />
            Aymara básico
          </p>
        </div>
      </div>
    </section>
  );
}

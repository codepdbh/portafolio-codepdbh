import { Award, GraduationCap, Languages, ShieldCheck } from 'lucide-react';
const certificates = ['Hacking Ético Ofensivo · Red Team — 43 h','Hacking Ético para Android','Responsabilidad por la Función Pública — 60 h','Políticas Públicas — 20 h','Ley N.º 1178 — 40 h','Aymara básico — 240 h','Rust básico — 15 h','Desarrollo de videojuegos','Flutter Study Jam · GDG','Protocolos de seguridad Cisco'];
export default function Education() { return <section id="formacion" className="py-24"><div className="content-shell">
  <div className="section-heading"><span className="section-index">03</span><div><h2>Formación y <em>aprendizaje continuo.</em></h2><p>Una base sólida en ingeniería, docencia, IA y seguridad.</p></div></div>
  <div className="education-layout"><div className="degree-list">
    <article><GraduationCap/><div><span>EN CURSO</span><h3>Maestría en Inteligencia Artificial y Tecnologías Emergentes</h3><p>Posgrado de la Escuela Militar de Ingeniería</p></div></article>
    <article><GraduationCap/><div><span>2023</span><h3>Licenciatura en Ingeniería de Sistemas</h3><p>Escuela Militar de Ingeniería · Diploma académico y título profesional</p></div></article>
    <article><Award/><div><span>2024 · 800 HORAS</span><h3>Diplomado en Educación Superior</h3><p>Planificación y Desarrollo de Competencias Profesionales · EMI</p></div></article>
  </div><div className="learning-panel"><div className="panel-title"><ShieldCheck/><h3>Certificaciones seleccionadas</h3></div><div className="certificate-list">{certificates.map(x=><span key={x}>{x}</span>)}</div><div className="language-row"><Languages/><div><strong>Idiomas</strong><p>Español nativo · Inglés B2 · Aymara básico</p></div></div></div></div>
  </div></section>; }

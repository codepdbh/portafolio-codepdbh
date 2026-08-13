import { motion } from 'framer-motion';
import { BriefcaseBusiness, Map, Sparkles } from 'lucide-react';

const roles = [
  { period: 'FEB 2026 — ACTUALIDAD', role: 'Desarrollador Full Stack', company: 'CECASEM', text: 'Desarrollo y mantenimiento de soluciones institucionales, integración de bases de datos y APIs, despliegues, soporte y mejora continua.' },
  { period: '2023 — ACTUALIDAD', role: 'Desarrollador de Sistemas', company: 'Asociación Boliviana de Árbitros de Fútbol', text: 'Plataforma web deportiva para la gestión administrativa y operativa de árbitros, módulos de control, bases de datos y reportes.' },
  { period: 'JUN 2025', role: 'Instructor en Inteligencia Artificial', company: 'U. E. Don Bosco Pampahasi', text: 'Formación docente en herramientas de IA aplicadas a planificación educativa, evaluación y creación de contenidos.' },
  { period: 'ENE — MAY 2025', role: 'Ingeniero de Sistemas / GIS Full Stack', company: 'Fundación COMPA · Ruta Sin Gluten', text: 'Arquitectura del módulo GIS con PostgreSQL, PostGIS, React-Leaflet, OSRM, geolocalización y cálculo de rutas.' },
  { period: 'MAR — DIC 2024', role: 'Especialista en Tecnologías de la Información', company: 'Escuelas Populares Don Bosco', text: 'Sistemas educativos y administrativos, web institucional, cursos de programación para niños y capacitación docente.' },
  { period: '2024', role: 'Instructor en Inteligencia Artificial', company: 'Consultora B&CG', text: 'Curso práctico sobre productividad, automatización y análisis con herramientas de inteligencia artificial.' },
  { period: 'DIC 2023 — MAR 2024', role: 'Pasantía en soluciones tecnológicas', company: 'Witronix LED', text: 'ERP Odoo, automatización KNX, administración de redes, diseño gráfico y soporte técnico empresarial.' },
];

export default function Experience() {
  return <section id="experiencia" className="section-band py-24"><div className="content-shell">
    <div className="section-heading"><span className="section-index">02</span><div><h2>Experiencia que conecta <em>producto y propósito.</em></h2><p>Software institucional, educación, GIS e inteligencia artificial aplicada.</p></div></div>
    <div className="timeline">{roles.map((item, index) => <motion.article key={item.company + item.period} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.05}} className="timeline-row"><p className="timeline-period">{item.period}</p><span className="timeline-dot"/><div><p className="timeline-role">{item.role}</p><h3>{item.company}</h3><p>{item.text}</p></div></motion.article>)}</div>
    <div className="expertise-strip"><div><BriefcaseBusiness/><strong>Full stack</strong><span>Web, APIs y datos</span></div><div><Map/><strong>GIS</strong><span>PostGIS, Leaflet y OSRM</span></div><div><Sparkles/><strong>IA aplicada</strong><span>Audio, automatización y educación</span></div></div>
  </div></section>;
}

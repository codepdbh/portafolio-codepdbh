import { motion } from 'framer-motion';

const technologies = [
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'from-blue-400/20 to-blue-500/10 border-blue-400/25 text-blue-300' },
  { name: 'PostGIS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'from-emerald-400/20 to-emerald-500/10 border-emerald-400/25 text-emerald-300' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'from-sky-400/20 to-sky-500/10 border-sky-400/25 text-sky-300' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: 'from-red-400/20 to-red-500/10 border-red-400/25 text-red-300' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: 'from-teal-400/20 to-teal-500/10 border-teal-400/25 text-teal-300' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'from-orange-400/20 to-orange-500/10 border-orange-400/25 text-orange-300' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: 'from-indigo-400/20 to-indigo-500/10 border-indigo-400/25 text-indigo-300' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'from-orange-400/20 to-orange-500/10 border-orange-400/25 text-orange-300' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-400/20 to-yellow-500/10 border-yellow-400/25 text-yellow-300' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-400/20 to-blue-500/10 border-blue-400/25 text-blue-300' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-emerald-400/20 to-emerald-500/10 border-emerald-400/25 text-emerald-300' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: 'from-cyan-400/20 to-cyan-500/10 border-cyan-400/25 text-cyan-300' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', color: 'from-teal-400/20 to-teal-500/10 border-teal-400/25 text-teal-300' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-sky-400/20 to-sky-500/10 border-sky-400/25 text-sky-300' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'from-slate-400/20 to-slate-500/10 border-slate-400/25 text-slate-300' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'from-cyan-400/20 to-cyan-500/10 border-cyan-400/25 text-cyan-300' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: 'from-purple-400/20 to-purple-500/10 border-purple-400/25 text-purple-300' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-400/20 to-green-500/10 border-green-400/25 text-green-300' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', color: 'from-red-400/20 to-red-500/10 border-red-400/25 text-red-300' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'from-orange-400/20 to-orange-500/10 border-orange-400/25 text-orange-300' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'from-blue-400/20 to-blue-500/10 border-blue-400/25 text-blue-300' },
  { name: 'AI / ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'from-violet-400/20 to-violet-500/10 border-violet-400/25 text-violet-300' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'from-gray-400/20 to-gray-500/10 border-gray-400/25 text-gray-300' },
  { name: 'GitHub Pages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'from-gray-400/20 to-gray-500/10 border-gray-400/25 text-gray-300' },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Stack <span className="text-cyan-glow">tecnológico</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-glow to-blue-accent rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Del prototipo al despliegue: frontend, backend, datos, GIS, móvil, IA e infraestructura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {technologies.map((tech, idx) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r border cursor-default transition-shadow hover:shadow-lg hover:shadow-black/20 ${tech.color}`}
            >
              <img src={tech.icon} alt={tech.name} className="w-5 h-5" loading="lazy" />
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

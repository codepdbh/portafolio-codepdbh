# Portafolio — Paulo Daniel Batuani Hurtado

Portafolio profesional de proyectos de GitHub, construido con React, TypeScript, Vite y Tailwind CSS.

> Systems Engineer | Full Stack Developer | AI Enthusiast

---

## 🚀 Instalación

```bash
git clone https://github.com/codepdbh/portafolio-codepdbh.git
cd portafolio-codepdbh
npm install
```

## 💻 Ejecutar localmente

```bash
npm run dev
```

Se abrirá en `http://localhost:5173/portafolio-codepdbh/`

## 🖼️ Agregar imágenes de proyectos

1. Coloca tus imágenes `.png` en la carpeta:

```
src/assets/projects/
```

2. Nombra cada imagen con el **slug** del proyecto (en minúsculas, con guiones). Ejemplos:

| Proyecto | Archivo de imagen |
|---|---|
| SafeShare AI | `safeshare-ai.png` |
| CRUD Flutter + NestJS | `crud-flutter-nest.png` |
| NeonSnake 3D | `neonsnake3d.png` |
| Karaoke AI | `karaoke-ai.png` |
| Piano | `piano.png` |

3. Si no existe la imagen, se mostrará un placeholder elegante automáticamente.

## ➕ Agregar nuevos proyectos

Edita el archivo:

```
src/data/projects.ts
```

Agrega un nuevo objeto al array `projects` con esta estructura:

```typescript
{
  name: 'Nombre del Proyecto',
  slug: 'nombre-del-proyecto',        // mismo nombre que la imagen .png
  description: 'Descripción breve y profesional del proyecto.',
  image: 'nombre-del-proyecto',        // sin extensión
  repoUrl: 'https://github.com/codepdbh/nombre-del-proyecto',
  demoUrl: 'https://demo.com',         // opcional
  technologies: ['React', 'TypeScript'],
  category: ['Web'],                   // IA, Web, Flutter, Juegos, Herramientas, Seguridad, Educación, Backend
  language: 'TypeScript',              // opcional
  featured: false,                     // true para mostrarlo en la sección destacados
}
```

## 🏗️ Build de producción

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`.

## 🌐 Desplegar en GitHub Pages

### Opción 1: Con `gh-pages`

```bash
npm run deploy
```

Esto ejecuta automáticamente `build` y luego publica la carpeta `dist/` en la rama `gh-pages`.

### Opción 2: Manual

1. Ejecuta `npm run build`
2. Sube el contenido de `dist/` a la rama `gh-pages` de tu repositorio
3. En GitHub → Settings → Pages → Source: selecciona la rama `gh-pages`, carpeta `/ (root)`

### ⚠️ Importante: Configuración del base path

En `vite.config.ts`, el valor de `base` debe coincidir con el nombre de tu repositorio:

```typescript
base: '/portafolio-codepdbh/'
```

Si cambias el nombre del repositorio, actualiza este valor.

## 📁 Estructura del proyecto

```
src/
├── assets/
│   └── projects/          ← Imágenes .png de los proyectos
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectFilters.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts        ← Datos de todos los proyectos
├── types/
│   └── project.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- gh-pages

## 📄 Licencia

MIT — Paulo Daniel Batuani Hurtado

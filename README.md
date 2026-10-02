# codepdbh — Portafolio

Portafolio de Paulo Daniel Batuani Hurtado. React, TypeScript y Vite; diseño editorial responsive, catálogo de proyectos públicos, ports y estrellas de GitHub.

Publicado en https://codepdbh.github.io/portafolio-codepdbh/

## Desarrollo

```sh
npm ci
npm run dev
npm run build
```

## Proyectos y estrellas

- `src/data/catalog.ts`: títulos y descripciones seleccionados, clasificación de ports y combinación con el catálogo anterior.
- `src/data/github.json`: copia pública de repositorios y estrellas para mostrar contenido incluso si GitHub no responde.
- `src/hooks/useRepositories.ts`: consulta paginada de repositorios públicos al abrir la página, cada 30 minutos mientras está visible y al recuperar el foco. Conserva la última respuesta válida en almacenamiento local cuando está disponible. Nunca necesita credenciales en el navegador.
- `node scripts/sync-github.mjs`: actualiza la copia local. Un fallo conserva el archivo anterior.
- Los nuevos repositorios públicos aparecen automáticamente; para personalizar su descripción o categoría, editar `catalog.ts`.

La API pública puede limitar las consultas. En ese caso se muestra la última copia con su fecha, sin convertir valores desconocidos en ceros.

## Imágenes y procedencia

`src/data/project-images.json` registra la URL original, el archivo local y el tipo de cada imagen. `public/projects/` conserva imágenes obtenidas de los repositorios o sus README. Cuando no hay una imagen apropiada se utiliza la vista previa del repositorio generada por GitHub, identificada en pantalla. No se presentan estas vistas previas como capturas del juego o aplicación.

Las imágenes se cargan bajo demanda, conservando proporciones y colores. Los nuevos proyectos sin entrada en el manifiesto usan la vista previa de GitHub. Para cambiar una imagen, guardar el recurso en `public/projects/` y actualizar su entrada y procedencia. Los créditos y licencias pertenecen a los respectivos proyectos.

## GitHub Pages

`.github/workflows/pages.yml` construye y publica con GitHub Actions en cada push a `main`, manualmente y todos los días a las 10:17 UTC. Antes de construir renueva los datos públicos; si la API falla usa la copia del repositorio. No genera commits automáticos ni publica secretos.

Pages debe usar **GitHub Actions** como origen. El comando `npm run deploy` inicia el workflow de la rama remota `main`; los cambios locales deben estar confirmados y subidos antes.

La base Vite es `/portafolio-codepdbh/`. El CV se conserva en `public/`.

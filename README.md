# On Cycles · Astro · Estructura común v2

Proyecto estático con Home, Servicio Técnico y Suspensiones. Esta actualización aplica las mejoras sobre `CODIGO (2).7z`, conservando sus textos, rutas, colores, encuadres y secuencia de scroll. No añade una página E-Bike provisional.

## Desarrollo

Node 24 (`.nvmrc`) y npm. Detén el servidor de desarrollo antes de reinstalar dependencias en Windows.

```bash
npm ci
npm run dev
```

La URL por defecto es `http://localhost:4321/oncycles/`; utiliza el puerto real que muestre la terminal.

```bash
npm run check
npm run verify
npm run format:check
npm run preview
```

- `check`: diagnósticos y tipos con `astro check`.
- `verify`: tipos, compilación, verificación del HTML generado y tests.
- `format:check`: comprueba el formato sin modificar archivos.
- `format`: aplica Prettier. Revisar el diff después.
- `preview`: sirve la última compilación; ejecutar `build` antes si se ha cambiado código.

## Mapa de responsabilidades

| Ubicación                             | Responsabilidad / consumidores                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| `src/pages/`                          | Rutas existentes y secciones particulares de cada página.                                   |
| `src/layouts/BaseLayout.astro`        | HTML, metadatos, cabecera, main y footer.                                                   |
| `src/layouts/ServiceLayout.astro`     | Hero, credenciales, contenido particular, Próxima salida, FAQ y reserva.                    |
| `src/components/`                     | Bloques compartidos. Las props describen las variaciones de contenido.                      |
| `src/data/service-catalog.ts`         | Lista común de servicios, IDs y enlaces. La usan la Home y el formulario.                   |
| `src/data/home.ts`                    | Catálogo técnico, espacios, FAQs y carrusel principal de Home.                              |
| `src/data/services.ts`                | Metadatos, hero, FAQs y proceso de Servicio Técnico.                                        |
| `src/data/suspension.ts`              | Metadatos, hero, especialidades, marcas, FAQs y proceso de Suspensiones.                    |
| `src/data/brands.ts`                  | Logos del carrusel general de marcas.                                                       |
| `src/data/site.ts`                    | Correo del taller e identidad / metadatos comunes.                                          |
| `src/data/images.ts`                  | Registro único de fotografías importadas, rutas estáticas y secuencia.                      |
| `src/data/content.js`                 | Reexportaciones de compatibilidad. No añadir copias de los datos.                           |
| `src/types/content.ts`                | Contratos de datos y props compartidos.                                                     |
| `src/assets/images/`                  | 31 fotografías procesadas por Astro.                                                        |
| `public/images/`                      | Recursos estáticos que conservan URL o no necesitan procesamiento.                          |
| `public/images/proxima-salida/`       | 190 JPG originales de la animación.                                                         |
| `src/styles/tokens.css`               | Variables base de colores, fuentes y medidas.                                               |
| `src/styles/global.css` / `brand.css` | Base y estilos heredados compartidos; se conserva su cascada.                               |
| `src/styles/servicios.css`            | Diseño compartido de los servicios.                                                         |
| `src/styles/suspension-bicicleta.css` | Diseño particular de Suspensiones.                                                          |
| `src/scripts/`                        | Interacciones de los componentes. `booking.js` es el único controlador de reserva.          |
| `src/lib/paths.js`                    | `base` y `withBase()`, compatibles con subcarpeta o dominio raíz.                           |
| `scripts/verify-build.mjs`            | Descubre el HTML compilado y comprueba recursos, srcset, enlaces, anclas, IDs, H1 y frames. |
| `tests/`                              | Preparación del correo y consistencia del catálogo común de servicios.                      |

## CSS y componentes

Marcas, SobreOnCycles y ResenasGoogle usan ahora `<style>` encapsulado por Astro dentro de su componente. Se han retirado los atributos artificiales `data-oc-marcas`, `data-oc-sobre-oncycles` y `data-oc-resenas-google`, y sus antiguos CSS externos.

Los estilos externos no quedan encapsulados por importarlos desde un componente. Para bloques nuevos, utiliza `<style>` nativo si el estilo pertenece solo al bloque. Mantén colores, tipografía y utilidades en CSS común. Si un estilo debe afectar a un hijo o al contenido de un slot, hazlo explícitamente y comprueba su alcance.

`global.css` conserva las reglas heredadas y sus breakpoints para evitar cambios de cascada. No se ha dividido arbitrariamente en docenas de archivos. Los ajustes responsive de las variables siguen allí; sus valores base están en `tokens.css`.

La etiqueta del catálogo conserva el ajuste de esta entrega: 14 px, número naranja y texto blanco.

## Imágenes: dos usos distintos

Todo se registra en `src/data/images.ts`, pero no todos los archivos se procesan igual:

- `photo('catalogo-suspensiones.webp')` devuelve `ImageMetadata` de una foto en `src/assets/images/`, para `<Image>` de `astro:assets`.
- `image('oncycles-logo.png')` devuelve una URL con base. También resuelve fotografías importadas si un consumidor necesita una URL.
- `img('nombre')` mantiene compatibilidad con claves antiguas sin extensión.
- `siteImages` agrupa recursos comunes; `nextRideSequence` describe los frames.

Para sustituir una fotografía procesada, modifica su import en `images.ts` y conserva la clave de `photoFiles`. Si cambias el nombre físico asociado, actualiza la entrada de `imageFiles` en ese mismo archivo. Los datos y componentes siguen usando la clave estable. No repitas imports físicos por todas las páginas.

Las fotografías de Home, las tarjetas de catálogo / servicios, los heroes de servicio y las especialidades de Suspensiones usan `<Image>` con variantes responsive. Se mantiene la proporción original y el recorte lo sigue controlando el CSS; no se fuerzan transformaciones de recorte distintas.

Los JPG de Próxima salida, su póster estático y los logos permanecen en `public/`. No mover ni renumerar los frames sin revisar su controlador y el verificador.

## Datos y nueva página

Las FAQs usan `{ question, answer }`; los pasos usan `{ title, description }`. Los servicios comunes tienen `id`, `title`, `image`, `description` y `href` opcional. Solo se añade `href` cuando existe la página.

`ServiceLayout` ya monta los bloques comunes. Dentro de la página solo se escriben sus secciones exclusivas. Consulta `docs/NUEVO-SERVICIO.md` para crear `ebike-barcelona.astro`.

No hace falta usar colecciones de contenido para estas tres páginas distintas. Se podrán valorar si aparece una colección amplia y homogénea de artículos o fichas.

## Reserva y seguridad

El formulario prepara un correo `mailto:`; no envía automáticamente, no guarda datos y no crea una reserva confirmada. El correo se cambia en `site.ts`. La lista de opciones procede de `service-catalog.ts`, no de los datos editoriales de la Home.

Nunca guardes claves o credenciales privadas en `src/data/` ni en variables expuestas al navegador. `.env` está excluido de Git; eso no convierte en secretos los valores que se incorporan al HTML o al JavaScript público.

## GitHub Pages

`astro.config.mjs` conserva `site: https://dpenasmi.github.io`, `base: /oncycles/` y salida estática. `SITE_URL` y `BASE_PATH` permiten sobrescribirlos al compilar.

El workflow mantiene Node 24 y `build-cmd: npm run verify`; por tanto, los nuevos diagnósticos y tests participan antes de publicar. Configura Pages con fuente **GitHub Actions**.

```bash
git status
git add -A
git diff --cached --stat
git commit -m "Aplica buenas prácticas Astro y catálogo común"
git push origin main
```

No versionar `node_modules/`, `dist/`, `.astro/` ni `.env`. Los cambios de `package.json` y `package-lock.json` se suben juntos.

## Validación y documentación

Consulta `docs/CAMBIOS-Y-VALIDACION.md`. La comprobación técnica de DOM y CSS no sustituye revisar el resultado en navegadores reales, especialmente el scroll en PC, tablet y móvil.

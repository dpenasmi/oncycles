# Cambios y validación · Buenas prácticas Astro · 25/11/2026

## Copia utilizada

Se parte del archivo `CODIGO (2).7z` entregado en esta sesión. Incluye los últimos ajustes de la etiqueta del catálogo: 14 px, número naranja y texto blanco. Las tres rutas y su contenido comercial se mantienen; no se crea una página E-Bike de muestra.

## Cambios aplicados

1. Se añaden `@astrojs/check` y TypeScript como dependencias de desarrollo fijadas en el lockfile. `npm run check` participa en `verify` y, por tanto, en el workflow existente.
2. Se corrigen los cuatro errores de tipado implícito del carrusel y se retiran dos imports no utilizados de Home. Los componentes reciben contratos claros.
3. `src/types/content.ts` agrupa contratos de metadatos, hero, tarjetas, marcas, preguntas, pasos y catálogo común.
4. `src/data/service-catalog.ts` es la fuente compartida de servicios para Home y formulario. Se conserva el mismo orden, texto, opciones y enlace de Suspensiones.
5. Los datos editoriales pasan a `.ts`. Las FAQs se editan como `{ question, answer }`; el proceso como `{ title, description }`. Los componentes renderizan el mismo HTML.
6. `Marcas`, `SobreOnCycles` y `ResenasGoogle` recuperan estilos `<style>` encapsulados por Astro. Se eliminan sus tres CSS externos y los atributos que simulaban su ámbito. Los estilos compartidos de servicios siguen siendo compartidos.
7. Se extraen los tokens base a `tokens.css` conservando su posición en la cascada. Las reglas heredadas y los ajustes responsive no se reordenan arbitrariamente.
8. Se trasladan 31 fotos, sin alterar los archivos fuente, desde `public/images/` a `src/assets/images/`. Se registran en `images.ts` y se renderizan con `<Image>` y variantes responsive donde corresponde. El CSS mantiene el recorte original. Logos, póster y fotogramas de scroll conservan su uso estático.
9. El verificador descubre todas las páginas HTML compiladas y comprueba las variantes `srcset`, destinos internos y anclas, además de los controles anteriores. Ya no hay una lista manual `routes` que mantener.
10. Se añaden dos pruebas de consistencia del catálogo común. Se actualizan README y el patrón de nueva página.

## Comprobaciones realizadas

- La copia original compila y supera sus cuatro tests; permite comparar antes y después.
- `npm run check`: 0 errores, 0 avisos y 0 sugerencias en los diagnósticos revisados.
- `npm run verify`: 3 páginas, 208 referencias de recursos y `srcset`, enlaces, anclas, IDs y H1 correctos; 190 fotogramas presentes; 6 tests correctos.
- Verificación en la base `/oncycles/` y en raíz `/` mediante `BASE_PATH`.
- `npm run format:check`: formato correcto.
- Auditoría de dependencias de esta entrega: 0 vulnerabilidades conocidas. No sustituye una auditoría integral ni garantiza ausencia de problemas futuros.
- Comparación del DOM compilado: mismo número y orden de elementos en las tres páginas (625 en Home, 317 en Servicios y 308 en Suspensiones), sin diferencias de textos, clases, enlaces o atributos de comportamiento después de excluir los cambios previstos de imágenes y encapsulación.
- Comparación técnica de 4.104 propiedades CSS en tamaños 1440×900, 768×1024 y 390×844: sin diferencias en las propiedades y elementos revisados. Simulación de reglas y estilos con PostCSS y JSDOM; no es una prueba visual en un navegador real.
- Los 190 JPG son idénticos al original. El controlador `proxima-salida.js`, su CSS, `booking.js` y `manual-carousel.js` mantienen el comportamiento existente. En el componente Próxima salida solo cambia la importación del registro de imágenes.

## Límites y revisión manual

El navegador Chromium local no estaba disponible y la descarga de su ejecutable fue rechazada por el entorno. Por eso no se afirma una comprobación visual de píxeles ni una prueba de interacción real en PC, tablet o móvil.

Revisar en local y tras el despliegue: encuadres y calidad de imágenes responsive, navegación, apertura del correo, selección de servicio y animación de scroll en ambos sentidos. Las fotos sí se recomprimen al compilar como parte de la optimización; sus fuentes se conservan intactas.

No se cambian el correo de destino, el mecanismo mailto, los textos comerciales ni las certificaciones. No se publica nada en GitHub desde esta entrega.

## Criterios para próximas páginas

- Usar BaseLayout y ServiceLayout, sin duplicar bloques comunes.
- Datos tipados por tema; catálogo de servicios común.
- CSS encapsulado para un bloque exclusivo. CSS global solo para lo compartido y con alcance consciente.
- Fotos procesables en `src/assets`; recursos de URL fija y secuencias dinámicas en `public`.
- Scripts desde su componente y un solo controlador por interacción.
- Las colecciones de contenido no son necesarias para estas tres páginas distintas.

Referencias oficiales consultadas:

- https://docs.astro.build/en/basics/project-structure/
- https://docs.astro.build/en/basics/layouts/
- https://docs.astro.build/en/guides/styling/
- https://docs.astro.build/en/guides/images/
- https://docs.astro.build/en/guides/typescript/
- https://docs.astro.build/en/guides/content-collections/

# On Cycles · Astro V3.1 · Hero automático

Esta versión utiliza el CSS y el marcado de referencia de la demo GYM aportados en esta conversación. Mantiene la tipografía Archivo Black / Inter, la composición del hero, los márgenes, los tamaños, el estilo de los botones, las tarjetas, las preguntas frecuentes y el pie. Sustituye el contenido por el de On Cycles y el amarillo por naranja `#FF5A1F`.

## Arrancar

Node.js 22.12 o superior y npm.

```bash
npm ci
npm run dev
```

Para generar y revisar la web estática:

```bash
npm run build
npm run preview
```

Abrir la URL que indique Astro. No abrir `dist/index.html` mediante doble clic: el sitio utiliza módulos y rutas que deben servirse por HTTP.

## Archivos

- `src/pages/index.astro`: marcado de la Home.
- `src/components/ServiceCarousel.astro`: marcado compartido por servicios y catálogo.
- `src/styles/global.css`: CSS original de GYM adaptado y bloque de ajustes On Cycles al final.
- `src/scripts/main.js`: navegación, carruseles y solicitud por correo.
- `src/scripts/banner.js`: animación original de GYM adaptada a las frases On Cycles.
- `src/data/content.js`: servicios, catálogo, fotografías del taller, FAQs y correo de contacto.
- `public/images/`: imágenes WebP locales.
- `dist/`: versión estática compilada lista para hosting.

El HTML, los estilos y los scripts están separados. El build también genera archivos CSS y JS externos.

## Cambios respecto a GYM

- Marca On Cycles y metadatos del taller.
- Franja con animación letra a letra, alternancia naranja/negro y botón de pausa. Respeta movimiento reducido y pausa cuando no está visible.
- Carrusel de servicios basado en «Clases en grupo»: Revisiones, Suspensiones, Frenos, Transmisión, Ruedas, Tijas telescópicas, Rodamientos y dirección, E-Bike, Setup y ajustes.
- Bloque de especialización en suspensiones.
- «Conoce el taller» utiliza el carrusel de «Conoce el gimnasio», con dos fotos visibles en escritorio y deslizamiento en móvil.
- Bloque «Un taller con mucho oficio» y representación provisional de las certificaciones.
- Segundo carrusel independiente para Catálogo técnico: Suspensiones, Tijas telescópicas, Transmisión, Frenos e hidráulica, Ruedas y bujes, E-Bike, Rodamientos y dirección, Tubeless y neumáticos.
- Pasos de visita, FAQs y solicitud de cita con la composición de GYM.
- Se han retirado los horarios deportivos, la promoción de descuento y el vídeo del gimnasio.

Las flechas e indicadores se actualizan también con desplazamiento táctil. Al enfocar la pista de un carrusel se puede navegar con izquierda/derecha, Inicio y Fin. Las tarjetas de servicios seleccionan su servicio en el formulario. No hay avance automático en los carruseles de fotos.

## Marca e imágenes

El color se controla desde `--orange` en la parte superior de `global.css`; los márgenes desde `--oc-side-padding`. Se mantiene la importación de Google Fonts de GYM: necesita acceso a Internet para cargar Archivo Black e Inter. Sin conexión se usan las tipografías alternativas declaradas.

Las imágenes incluidas proceden de las capturas y el wireframe de On Cycles aportados. Sirven para revisar el diseño y tienen resolución limitada. Algunas son imágenes generadas; no representan retratos verificados del equipo. Antes de publicar se deben sustituir por los originales de calidad.

El logotipo del encabezado es una representación tipográfica provisional. Las certificaciones también están representadas con texto; incorporar los archivos de marca oficiales al disponer de ellos.

## Solicitud de cita

El formulario valida los datos y prepara un mensaje para enviar desde la aplicación de correo de la persona. No realiza envíos automáticos ni confirma citas. El correo está centralizado en `src/data/content.js`; confirmar el buzón antes de publicar.

Para envío directo, sustituir el manejador de `booking-form` por la llamada al endpoint propio o webhook n8n/Make y añadir la validación de servidor. Incorporar la información de privacidad y las páginas legales reales cuando se prepare la publicación.

No incluye tienda, precios, control de existencias ni páginas independientes de servicio. El catálogo de esta Home muestra categorías y conduce a consulta de disponibilidad.

## Hosting y GitHub Pages

Para la raíz de un dominio, compilar normalmente y subir el contenido de `dist/`. Para una subcarpeta o un repositorio de GitHub Pages, configurar `BASE_PATH` durante la compilación.

Bash:

```bash
BASE_PATH=/oncycles/ npm run build
```

PowerShell:

```powershell
$env:BASE_PATH='/oncycles/'
npm run build
```

Para añadir URL canónica y metadatos de dominio definitivos, configurar `site` en `astro.config.mjs` cuando se decida dónde se publicará. La web WordPress existente no se ha modificado.

## Verificaciones realizadas

- `npm run build`: correcto, Astro 5.18.2.
- Sintaxis de los dos archivos JavaScript: correcta.
- HTML compilado: 9 servicios, 8 categorías y 3 fotos del taller.
- Verificadas rutas de imágenes, CSS y JS externos, IDs y enlaces de sección.
- Comprobado que no quedan rutas, vídeo, textos comerciales ni amarillo de GYM en la página.
- La vista previa del entorno agotó el tiempo de inicio. La revisión visual y las interacciones en navegador quedan pendientes; no se ha publicado el sitio.


## V3.1 · Hero automático y en bucle

Las cuatro imágenes del Hero cambian automáticamente cada 6 segundos con un fundido de 1,1 segundos. Después de la última vuelve a la primera. Se han eliminado del marcado las flechas, los indicadores y el botón de pausa, junto con sus estilos y dependencias JavaScript.

La rotación sigue funcionando con el cursor encima y al enfocar los enlaces. Solo se suspende mientras el Hero no es visible, la pestaña está oculta o está activada la preferencia de movimiento reducido. En este último caso se conserva una imagen estática. Sin JavaScript queda visible la primera fotografía.

- Fotos y encuadres: `heroSlides` en `src/data/content.js`.
- Intervalo en milisegundos: `data-interval="6000"` en `src/pages/index.astro`.
- Fundido: `transition:opacity 1100ms` en `src/styles/global.css`.
- Lógica del bucle: `src/scripts/hero-carousel.js`.

Esta versión conserva los botones de reserva y servicios, y los controles de los carruseles del resto de la página. Las imágenes del Hero siguen siendo provisionales.

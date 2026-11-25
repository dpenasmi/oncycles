# On Cycles · Proyecto Astro reorganizado

Proyecto estático con las tres páginas existentes y una estructura común para ampliar los servicios. Conserva los recursos originales, el diseño, los puntos responsive y la animación de 190 fotogramas de «Próxima salida».

## Instalación

Trabaja primero con esta copia en una carpeta nueva, conservando tu proyecto anterior.

Requisitos: **Node.js 22.23.4 o superior**; se recomienda Node.js 24 LTS. npm 9.6.5 o superior. `.nvmrc` selecciona Node 24 si utilizas nvm.

```bash
npm ci
npm run dev
```

No reutilices el `node_modules` del proyecto anterior: Astro se ha actualizado de la rama 5 a **7.4.13** para corregir las incidencias detectadas en la auditoría de dependencias.

```bash
npm run verify
npm run format:check
npm run preview
```

`verify` compila las tres páginas, comprueba recursos, anclas, IDs y los 190 fotogramas, y ejecuta los tests de preparación de reservas. El servidor de desarrollo escucha en localhost por defecto. Para probar desde otro dispositivo de tu red:

```bash
npm run dev -- --host 0.0.0.0
```

## Dónde editar cada cosa

| Archivo / carpeta                 | Responsabilidad                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------- |
| `src/data/images.js`              | Registro único de archivos de imagen y configuración de la secuencia.                   |
| `src/data/home.js`                | Cards de servicios, catálogo, espacios del taller, carrusel del hero y FAQs de la Home. |
| `src/data/services.js`            | Datos del hero, proceso y FAQs de Servicios.                                            |
| `src/data/suspension.js`          | Hero, subservicios, marcas, proceso y FAQs de Suspensiones.                             |
| `src/data/brands.js`              | Marcas del carrusel; el bucle reutiliza la misma lista.                                 |
| `src/data/site.js`                | Correo y metadatos comunes.                                                             |
| `src/data/content.js`             | Exportaciones de compatibilidad; no es una segunda copia de los datos.                  |
| `src/layouts/BaseLayout.astro`    | Documento HTML, metadatos, cabecera, main y footer.                                     |
| `src/layouts/ServiceLayout.astro` | Hero, credenciales, contenido particular, próxima salida, FAQ y reserva.                |
| `src/pages/`                      | Rutas y secciones exclusivas de cada página.                                            |
| `src/components/`                 | Bloques reutilizables con HTML generado por Astro.                                      |
| `src/styles/`                     | CSS; se conserva el orden de la cascada y los breakpoints.                              |
| `src/scripts/booking.js`          | Único controlador de reserva y selección desde las cards.                               |
| `src/scripts/proxima-salida.js`   | Animación de scroll que ya funcionaba.                                                  |
| `public/images/`                  | Archivos físicos de imagen, sin mover ni recomprimir.                                   |

No es necesario acumular todos los datos en un único `content.js`: los archivos separados por página son más fáciles de mantener. El registro de imágenes sí es común para que cada recurso se pueda cambiar desde un solo lugar.

## Cambiar imágenes

En `src/data/images.js`, conserva la **clave** y modifica el **valor** del archivo:

```js
export const imageFiles = {
  'horquillas-suspensiones.webp': 'mi-nueva-fotografia.webp',
  // ...resto del registro
};
```

Guarda el archivo nuevo en `public/images/`. La clave sigue siendo válida en las páginas. Para marcas, los valores incluyen `marcas/`. No escribas `/oncycles/` en las páginas: los helpers aplican la ruta base de Astro.

En `nextRideSequence` se configura la carpeta de fotogramas. El controlador conserva sus 190 imágenes y nombres `ezgif-frame-001.jpg` a `ezgif-frame-190.jpg`; cambiar el número de frames exige ajustar también su cronología en el JS. `siteImages.nextRide` es el fondo estático de respaldo.

## Componentes comunes

Cabecera, footer, formulario y próxima salida se importan y renderizan una sola vez por página desde sus layouts. `FaqSection`, `Workflow`, `ServiceHero` y `ServiceTrust` reciben sus datos como props y conservan sus clases y estructura visual.

Los estilos que antes estaban dentro de Marcas, SobreOnCycles y ResenasGoogle están en sus respectivos CSS. Los atributos `data-oc-marcas`, `data-oc-sobre-oncycles` y `data-oc-resenas-google` mantienen el aislamiento y la especificidad que tenían los estilos scoped de Astro. No los elimines al modificar su HTML.

La Home conserva sus textos editoriales en HTML; solo las colecciones de contenido repetitivo viven en `/data`. No hay contenido comercial construido desde JavaScript del navegador.

## Añadir un nuevo servicio

`ebike-barcelona.astro` todavía no estaba en el archivo entregado. No se ha añadido una página provisional ni publicado contenido nuevo.

Para crearla, utiliza el ejemplo de `docs/NUEVO-SERVICIO.md`: define sus datos, usa `ServiceLayout` y escribe dentro únicamente las secciones propias del servicio. Añade después su ruta en el objeto E-Bike de `src/data/home.js` (campo `href`). No enlaces una ruta que aún no existe.

## Reserva

El formulario prepara un correo `mailto:`; no realiza envíos automáticos ni guarda datos personales. La cita requiere confirmación del taller. El controlador es único para todas las páginas, reconoce `data-service` y `data-booking-service` y conserva el detalle de la revisión cuando existe.

El correo del taller se cambia en `src/data/site.js`. Suspensiones queda preseleccionado desde el HTML en su propia página, también sin JavaScript.

## Despliegue

La configuración por defecto mantiene:

- `site`: `https://dpenasmi.github.io`
- `base`: `/oncycles/`
- `output`: `static`

Puedes sobrescribir `SITE_URL` y `BASE_PATH` como variables de entorno al compilar. Ejemplo Bash para un dominio en raíz:

```bash
SITE_URL=https://tu-dominio.es BASE_PATH=/ npm run build
```

PowerShell:

```powershell
$env:SITE_URL='https://tu-dominio.es'
$env:BASE_PATH='/'
npm run build
```

Publica el contenido de `dist/`. No subas `node_modules`, `.astro` ni los archivos de trabajo del entorno. El ZIP fuente excluye esas carpetas.

## Comprobaciones y límites

Consulta `docs/CAMBIOS-Y-VALIDACION.md`. La auditoría de npm no sustituye una auditoría integral de seguridad. Las fuentes de Google y el enlace de reseñas existentes se conservan. Los enlaces legales sin destino siguen siendo texto: no se han inventado páginas legales.

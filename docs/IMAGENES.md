# Imágenes · Estándar simplificado

| Sección                             | Archivo                  | Asignación                           |
| ----------------------------------- | ------------------------ | ------------------------------------ |
| Home: hero                          | `src/data/home.ts`       | `heroSlides`                         |
| Home: servicios, catálogo y taller  | `src/data/home.ts`       | `services`, `catalog`, `workshop`    |
| Home: especialista y retrato        | `src/data/home.ts`       | `suspensionBackground`, `aboutImage` |
| Servicio técnico                    | `src/data/services.ts`   | `serviceHero`, `serviceImages`       |
| Suspensiones                        | `src/data/suspension.ts` | `suspensionHero`, `specialties`      |
| E-Bike                              | `src/data/ebike.ts`      | `ebikeHero`, `ebikeSpecialties`      |
| Marcas de un servicio               | Datos de ese servicio    | `brands` o `ebikeBrands`             |
| Carrusel general de marcas          | `src/data/brands.ts`     | `brands`                             |
| Logo, certificados y Próxima salida | `src/data/images.ts`     | `siteImages`, `nextRideSequence`     |

## Cambiar una foto

1. Guarda el nuevo archivo en `src/assets/images/`.
2. Abre los datos de su página.
3. Cambia únicamente la ruta del import y conserva el nombre de la variable.

Ejemplo en `src/data/ebike.ts`:

```ts
// Antes
import ebikeImage from '../assets/images/ebike.webp';
// Después: sustituye el import anterior, no añadas los dos.
import ebikeImage from '../assets/images/hero-ebike.webp';
```

El nuevo archivo debe existir con el nombre y extensión exactos. El hero sigue utilizando `image: ebikeImage`. No hay que registrar claves ni editar componentes. Si reemplazas la foto conservando el nombre físico, no hace falta editar código.

Para una tarjeta nueva, importa su archivo y asigna la variable a `image` de esa tarjeta:

```ts
import diagnosticoImage from '../assets/images/ebike-diagnostico.png';
// En la tarjeta: image: diagnosticoImage,
```

Si una misma foto se utiliza en varias páginas, cada página conserva su import explícito. Renombrar físicamente ese archivo compartido requiere actualizar los imports que lo utilicen. Para sustituirlo sin renombrarlo, basta con reemplazar su contenido.

## Fotos, fondos y recursos estáticos

Las fotos procesadas viven en `src/assets/images/`. Los componentes reciben `ImageMetadata` y renderizan `<Image src={item.image} ... />`. Ya no añaden extensiones ni resuelven alias. Los imports incorrectos se detectan al compilar.

Para un fondo que necesite una URL, utiliza `.src` de la imagen importada en los datos. El encuadre y los degradados permanecen en Astro/CSS.

Los logos y los fotogramas mantienen sus archivos en `public/images/`. Sus URLs se asignan en los datos con:

```ts
import { withBase } from '../lib/paths.js';
const logo = withBase('images/marcas/shimano.webp');
```

No escribas `public/` en la URL ni `/oncycles/` a mano.

## Organización

`images.ts` contiene solo recursos realmente comunes. Se retiran `photoFiles`, `imageFiles`, `photo()`, `image()` e `img()`. También se elimina `content.js`, una fachada de compatibilidad sin consumidores.

`service-catalog.ts` conserva los textos, IDs y enlaces comunes. Las fotos de esas tarjetas se asignan en `home.ts`; el formulario no depende de imágenes. No se eliminan archivos de fotos, ni se modifica el CSS o el controlador de scroll.

Ejecuta `npm run verify` y `npm run format:check`; revisa encuadres en PC, tablet y móvil antes de publicar. Los informes históricos no sustituyen este estándar.

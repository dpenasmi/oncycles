# On Cycles · Sobre On Cycles

1. Copia `src/components/SobreOnCycles.astro` en la misma carpeta de tu proyecto.
2. Copia los tres PNG de `public/images/` a `public/images/` de tu proyecto. El archivo `oficio.png` es la ilustración sin ribete blanco; sustituye el anterior si existe.
3. En el bloque inicial de `src/pages/index.astro`, entre los delimitadores `---`, añade:

```astro
import SobreOnCycles from '../components/SobreOnCycles.astro';
```

4. Sustituye toda la sección antigua que empieza en `<section ... id="oficio" ...>` y termina en su `</section>` por:

```astro
<SobreOnCycles />
```

Conserva las secciones de taller y catálogo que la rodean. No añadas el componente dentro de la sección antigua.

El CSS va incluido en el componente y está limitado a sus clases. Mantiene el ancla `#oficio`; el enlace «Conoce el taller» apunta a `#taller`. Las fuentes Archivo Black e Inter deben seguir cargadas desde el diseño global existente.

Puedes borrar las reglas específicas antiguas de `#oficio > img` y `.about-section`. No borres reglas compartidas por otras secciones. Los antiguos estilos de `.certifications` no se usan en este componente.

El diseño usa dos columnas en escritorio y una columna en móvil, con la ilustración completa sobre el texto. No impone una altura fija a la sección.

Para cambiar el enlace o la ilustración:

```astro
<SobreOnCycles workshopHref="#taller" image={`${import.meta.env.BASE_URL}images/oficio.png`} />
```

Validación: componente integrado en una copia local del proyecto y compilación de producción de Astro.

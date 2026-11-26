# Validación del sistema simplificado · 25/11/2026

- Comparación con el archivo original: cuatro páginas con el mismo HTML normalizado, textos, clases, enlaces y atributos de imagen, incluidos src, srcset, tamaños y dimensiones. Solo se excluyeron scripts, estilos y atributos internos de encapsulación de Astro.
- `npm run verify`: tipos sin errores, cuatro páginas compiladas, recursos y enlaces verificados, 190 fotogramas presentes y seis pruebas superadas.
- `BASE_PATH=/ npm run verify`: mismas verificaciones superadas en la raíz del dominio.
- `npm run format:check`: correcto.
- Fotos, archivos públicos, hojas CSS, scripts de interacción, dependencias y configuración de publicación conservados sin cambios.
- No se ha realizado una prueba visual en un navegador real. Revisar los encuadres en PC, tablet y móvil al instalar y antes de publicar.

La documentación vigente de imágenes es `IMAGENES.md`; los informes de migraciones anteriores son históricos.

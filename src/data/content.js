// Contenido editable. Las imágenes están en public/images.

// Escribimos los datos como un array de arrays:
// cada fila contiene título, imagen y descripción.
// Con .map() convertimos cada fila en un objeto.
// Resultado final: un array de objetos.
export const services = [
 ['Revisiones','servicio-revisiones','Mantenimiento para que todo vuelva a ir fino.'],
 ['Suspensiones','servicio-suspensiones','Revisión, mantenimiento y configuraciones.'],
 ['Frenos','servicio-frenos','Control y seguridad en cada salida.'],
 ['Transmisión','servicio-transmision','Precisión y rendimiento en cada cambio.'],
 ['Ruedas','servicio-ruedas','Fiabilidad, centrado y resistencia.'],
 ['Tijas telescópicas','servicio-tijas','Servicio y optimización del funcionamiento.'],
 ['Rodamientos y dirección','servicio-rodamientos','Suavidad y control, sin holguras.'],
 ['E-Bike','servicio-ebike','Diagnóstico y mantenimiento especializado.'],
 ['Setup y ajustes','servicio-setup','Tu bici, a tu medida.']
].map(([title,image,description])=>({title,image,description})); 


/*
 * [title, image, description] extrae los tres valores de cada fila.
 * Se llama desestructuración.
 *
 * ({ title, image, description }) crea y devuelve un objeto
 * con esos valores.
 *
 * .map() genera un nuevo array con los resultados.
 */



// Escribimos los datos como un array de arrays:
// cada fila contiene título, imagen y descripción.
// Con .map() convertimos cada fila en un objeto.
// Resultado final: un array de objetos.
export const catalog = [
 ['Suspensiones','catalogo-suspensiones','Horquillas, amortiguadores y componentes.'],
 ['Tijas telescópicas','catalogo-tijas','Control y comodidad sobre la bici.'],
 ['Transmisión','catalogo-transmision','Cadenas, cassettes y cambios.'],
 ['Frenos e hidráulica','catalogo-frenos','Potencia, tacto y precisión.'],
 ['Ruedas y bujes','catalogo-ruedas','Componentes para seguir rodando.'],
 ['E-Bike','catalogo-ebike','Soluciones para tu bicicleta eléctrica.'],
 ['Rodamientos y dirección','catalogo-rodamientos','Cada giro cuenta.'],
 ['Tubeless y neumáticos','catalogo-neumaticos','Agarre y confianza en cada terreno.']
].map(([title,image,description])=>({title,image,description}));


// Usamos un Array de Objetos
export const workshop = [
  {
    title: 'Zona de mecánica',
    image: 'taller-banco',
    description: 'Orden, herramientas y precisión.'
  },
  {
    title: 'Zona de lavado técnico',
    image: 'taller-mecanica',
    description: 'Limpieza y cuidado hasta el último detalle.'
  },
  {
    title: 'Zona de suspensiones',
    image: 'banco-suspensiones',
    description: 'Diagnóstico, mantenimiento y ajuste de precisión.'
  }
];

// Usamos un array de arrays:
// cada fila contiene una pregunta y su respuesta.
export const faqs = [
 ['¿Qué mantenimiento necesita mi bici?','Depende del uso, el terreno y el estado de los componentes. Cuéntanos cómo utilizas tu bici y revisaremos contigo qué necesita.'],
 ['¿Trabajáis con suspensiones de distintas marcas?','Consúltanos tu marca y modelo para confirmar el servicio adecuado y la disponibilidad de recambios.'],
 ['¿Puedo traer mi E-Bike?','Sí. Indícanos la marca, el sistema y el problema que has detectado para orientar la revisión.'],
 ['¿Cómo puedo solicitar cita?','Selecciona el servicio en el formulario. Podrás preparar tu solicitud y enviarla con tu aplicación de correo. La cita queda pendiente de confirmación del taller.']
];

export const email = 'info@oncycles.es';
export const img = (name) => `${import.meta.env.BASE_URL}images/${name}.webp`;

// Carrusel de fondo del Hero. Sustituye o añade imágenes desde aquí.
// Los encuadres se pueden ajustar por separado para PC y móvil.

//  Usamos un Array de Objetos
export const heroSlides = [
 { image:'lavado', label:'Máquina de lavado de bicicletas', position:'center', mobilePosition:'64% center' },
 { image:'banco-ruedas', label:'Servicio técnico de ruedas', position:'center', mobilePosition:'60% center' },
 { image:'taller-mecanica', label:'Puesta a punto de bicicletas', position:'center', mobilePosition:'55% center' },
 { image:'banco-suspensiones', label:'Banco de trabajo de suspensión', position:'center', mobilePosition:'center' },
 { image:'servicio-suspensiones', label:'Servicio de suspensión de bicicleta', position:'center', mobilePosition:'center' }
];

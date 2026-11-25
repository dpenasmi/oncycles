// Controlador único del formulario compartido; no envía ni almacena datos.
const oneLine = (value, max) =>
  String(value || '')
    .replace(/[\r\n\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, max);

export function bookingMail({ recipient, name, email, service, detail = '' }) {
  const destination = String(recipient || '').trim();
  if (!/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(destination))
    throw new Error('Destinatario de reserva no válido');
  const requested = oneLine(detail || service, 160);
  const subject = `Solicitud de cita · ${requested}`;
  const body = `Hola, Alfredo:\n\nMe gustaría solicitar cita para ${requested}.\n\nNombre: ${oneLine(name, 80)}\nEmail: ${oneLine(email, 150)}\n\nQuedo pendiente de tu confirmación. Gracias.`;
  return `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function initBooking() {
  document.querySelectorAll('#booking-form').forEach((form) => {
    if (form.dataset.bookingReady) return;
    const select = form.querySelector('select[name="servicio"]');
    if (!select) return;
    form.dataset.bookingReady = 'true';
    const controller = new AbortController();
    const options = { signal: controller.signal };
    let detail = '';
    document.addEventListener(
      'click',
      (event) => {
        const link =
          event.target instanceof Element
            ? event.target.closest('[data-booking-service], [data-service]')
            : null;
        if (!link) return;
        const value = link.dataset.bookingService || link.dataset.service;
        if ([...select.options].some((option) => option.value === value)) {
          select.value = value;
          detail = link.dataset.bookingDetail || '';
        }
      },
      options,
    );
    select.addEventListener(
      'change',
      () => {
        detail = '';
      },
      options,
    );
    form.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        const values = new FormData(form);
        let href;
        try {
          href = bookingMail({
            recipient: form.dataset.email,
            name: values.get('nombre'),
            email: values.get('email'),
            service: values.get('servicio'),
            detail,
          });
        } catch {
          const status = form.querySelector('#form-status');
          if (status) {
            status.hidden = false;
            status.textContent =
              'No se ha podido preparar la solicitud. Contacta con el taller por correo.';
          }
          return;
        }
        const status = form.querySelector('#form-status');
        const fallback = form.querySelector('#mail-fallback');
        if (status) {
          status.hidden = false;
          status.textContent =
            'Solicitud preparada. Envíala desde tu aplicación de correo; la cita queda pendiente de confirmación del taller.';
        }
        if (fallback) {
          fallback.href = href;
          fallback.hidden = false;
        }
        window.location.href = href;
      },
      options,
    );
    document.addEventListener(
      'astro:before-swap',
      () => {
        controller.abort();
        delete form.dataset.bookingReady;
      },
      { ...options, once: true },
    );
  });
}
if (typeof document !== 'undefined') {
  initBooking();
  document.addEventListener('astro:page-load', initBooking);
}

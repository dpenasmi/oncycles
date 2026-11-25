import test from 'node:test';
import assert from 'node:assert/strict';
import { bookingMail } from '../src/scripts/booking.js';
const sample = {
  recipient: 'info@oncycles.es',
  name: 'Àlex & Marta',
  email: 'alex@example.com',
  service: 'Suspensiones',
};
test('preserva tildes y caracteres sin crear cabeceras adicionales', () => {
  const url = bookingMail(sample);
  const query = new URLSearchParams(url.slice(url.indexOf('?') + 1));
  assert.equal(query.size, 2);
  assert.equal(query.get('subject'), 'Solicitud de cita · Suspensiones');
  assert.match(query.get('body'), /Àlex & Marta/);
});
test('una revisión concreta llega al asunto y al cuerpo del correo', () => {
  const query = new URLSearchParams(
    bookingMail({ ...sample, detail: 'Revisión completa' }).split('?')[1],
  );
  assert.equal(query.get('subject'), 'Solicitud de cita · Revisión completa');
  assert.match(query.get('body'), /Revisión completa/);
});
test('rechaza destinatarios con saltos de línea o esquemas ejecutables', () => {
  for (const recipient of [
    'info@oncycles.es\r\nBcc: other@example.com',
    'javascript:alert(1)',
    '',
  ]) {
    assert.throws(() => bookingMail({ ...sample, recipient }));
  }
});
test('el texto de usuario no puede añadir parámetros bcc a la URL', () => {
  const url = bookingMail({ ...sample, name: 'Ana\r\n&bcc=otro@example.com' });
  const query = new URLSearchParams(url.split('?')[1]);
  assert.equal(query.has('bcc'), false);
  assert.equal(query.size, 2);
  assert(!query.get('body').includes('Ana\r\n'));
});

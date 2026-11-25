// Fondo automático en bucle. No depende de controles, hover ni foco.
const hero = document.querySelector('[data-hero-carousel]');
if (hero) {
  const slides = [...hero.querySelectorAll('.hero-image')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const delay = Math.max(5000, Number(hero.dataset.interval) || 6000);
  let current = 0;
  let visible = false;
  let timer;

  function stop() {
    window.clearTimeout(timer);
    timer = undefined;
  }
  function schedule() {
    stop();
    if (slides.length < 2 || !visible || document.hidden || reducedMotion.matches) return;
    timer = window.setTimeout(() => {
      current = (current + 1) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current));
      schedule();
    }, delay);
  }

  if (slides.length > 1) {
    document.addEventListener('visibilitychange', schedule);
    reducedMotion.addEventListener('change', schedule);
    new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { threshold: 0.2 },
    ).observe(hero);
  }
}

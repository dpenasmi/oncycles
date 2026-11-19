// Franja que alterna frases y colores.
{
    const banner = document.querySelector(".rhythm-banner");
    if (banner && banner.querySelector(".rhythm-banner__message")) {
        const messages = Array.from(banner.querySelectorAll(".rhythm-banner__message"));
        const pauseButton = banner.querySelector(".rhythm-banner__pause");
        if (pauseButton) pauseButton.hidden = false;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let currentMessage = 0;
        let isVisible = false;
        let isPaused = false;
        let timer;
        // Prepara las letras manteniendo cada palabra unida.
        // Todas las letras reservan su espacio antes de aparecer.
        messages.forEach((message) => {
            let letterIndex = 0;
            message
                .querySelectorAll(".rhythm-banner__line")
                .forEach((line) => {
                const text = (line.textContent ?? "")
                    .trim()
                    .replace(/\s+/g, " ");
                const fragment = document.createDocumentFragment();
                text.split(/(\s+)/).forEach((part) => {
                    if (/^\s+$/.test(part)) {
                        fragment.append(document.createTextNode(part));
                        return;
                    }
                    const word = document.createElement("span");
                    word.className = "rhythm-banner__word";
                    Array.from(part).forEach((character) => {
                        const letter = document.createElement("span");
                        letter.className = "rhythm-banner__letter";
                        letter.textContent = character;
                        letter.style.setProperty("--letter-delay", `${letterIndex * 35}ms`);
                        word.append(letter);
                        letterIndex += 1;
                    });
                    fragment.append(word);
                });
                line.replaceChildren(fragment);
            });
        });
        const showMessage = () => {
            messages.forEach((message, index) => {
                message.classList.toggle("is-active", index === currentMessage);
            });
            banner.classList.toggle("is-dark", currentMessage === 1);
        };
        const stopAnimation = () => {
            if (timer !== undefined) {
                window.clearInterval(timer);
                timer = undefined;
            }
            // Al detenerla, deja la frase completa visible.
            banner.classList.remove("is-animating");
        };
        const updateAnimation = () => {
            stopAnimation();
            if (!isVisible ||
                isPaused ||
                document.hidden ||
                reducedMotion.matches) {
                return;
            }
            banner.classList.add("is-animating");
            timer = window.setInterval(() => {
                currentMessage = (currentMessage + 1) % messages.length;
                showMessage();
            }, 5500);
        };
        pauseButton?.addEventListener("click", () => {
            isPaused = !isPaused;
            pauseButton.setAttribute("aria-pressed", String(isPaused));
            pauseButton.textContent = isPaused
                ? "Reanudar animación"
                : "Pausar animación";
            updateAnimation();
        });
        const observer = new IntersectionObserver(([entry]) => {
            if (isVisible === entry.isIntersecting)
                return;
            isVisible = entry.isIntersecting;
            updateAnimation();
        }, { threshold: 0.15 });
        observer.observe(banner);
        document.addEventListener("visibilitychange", updateAnimation);
        reducedMotion.addEventListener("change", updateAnimation);
    }
}

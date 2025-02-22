window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        let windowBottom = window.scrollY + window.innerHeight;
        document.querySelectorAll(".scroll-fade").forEach((element) => {
            let objectTop = element.getBoundingClientRect().top + window.scrollY;
            if (objectTop < windowBottom) {
                if (getComputedStyle(element).opacity == 0) {
                    fadeTo(element, 1, 1000);
                }
            } else {
                if (getComputedStyle(element).opacity == 1) {
                    fadeTo(element, 0, 500);
                }
            }
        });
    });
    window.dispatchEvent(new Event("scroll"));
});

const fadeTo = (element, targetOpacity, duration) => {
    let startOpacity = parseFloat(getComputedStyle(element).opacity);
    let startTime = null;

    const animate = (time) => {
        if (!startTime) startTime = time;
        let progress = (time - startTime) / duration;
        if (progress < 1) {
            element.style.opacity = startOpacity + (targetOpacity - startOpacity) * progress;
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = targetOpacity;
        }
    }

    requestAnimationFrame(animate);
}
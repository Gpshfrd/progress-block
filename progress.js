class Progress {
    constructor(element) {
        this.element = element;
        this.arc = element.querySelector('.ring-progress');
    }

    setValue(value) {
        const number = Number(value);

        if (!Number.isFinite(number)) {
            return;
        }

        const progress = Math.min(Math.max(number, 0), 100);

        this.arc.style.strokeDashoffset = 100 - progress;
        this.arc.setAttribute('aria-valuenow', String(progress));
    }

    setAnimated(isAnimated) {
        this.element.classList.toggle('is-animated', isAnimated);
    }

    setHidden(isHidden) {
        this.element.classList.toggle('is-hidden', isHidden);
    }
}
const valueInput = document.querySelector('#value');
const animateInput = document.querySelector('#animate');
const hideInput = document.querySelector('#hide');

const valueError = document.querySelector("#value-error");

const progress = new Progress(document.querySelector('.ring'));

function updateProgress() {
    const text = valueInput.value.trim();
    const value = Number(text);

    const isValid =
        text !== "" &&
        Number.isFinite(value) &&
        value >= 0 &&
        value <= 100;

    valueInput.setAttribute("aria-invalid", String(!isValid));

    if (!isValid) {
        valueError.textContent = "Введите число от 0 до 100";
        return;
    }

    valueError.textContent = "";
    progress.setValue(value);
}

function updateAnimation() {
    progress.setAnimated(animateInput.checked);
}

function updateVisibility() {
    progress.setHidden(hideInput.checked);
}

valueInput.addEventListener('input', updateProgress);
animateInput.addEventListener('change', updateAnimation);
hideInput.addEventListener('change', updateVisibility);

updateProgress();
updateAnimation();
updateVisibility();
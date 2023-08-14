const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");

const initialMoneyValue = parseFloat(slider.value).toFixed(2);
sliderValue.textContent = `$${initialMoneyValue}`;

slider.addEventListener("input", () => {
    const moneyValue = parseFloat(slider.value).toFixed(2);
    sliderValue.textContent = `$${moneyValue}`;

    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    const color = `linear-gradient(to right, var(--Strong-Cyan) ${value}%, var(--Gray-Blue)${value}%)`;
    slider.style.background = color;
});


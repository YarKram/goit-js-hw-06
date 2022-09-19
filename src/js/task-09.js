function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector("span.color");
const buttonRef = document.querySelector("button.change-color");

buttonRef.addEventListener("click", () => {
	document.body.style.backgroundColor = getRandomHexColor();
	span.textContent = getRandomHexColor();
});

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

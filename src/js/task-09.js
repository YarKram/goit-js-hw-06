function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector("span.color");
const buttonRef = document.querySelector("button.change-color");
const onBackgroundChangeColor = () => {
	document.body.style.backgroundColor = getRandomHexColor();
	span.textContent = getRandomHexColor();
};

buttonRef.addEventListener("click", onBackgroundChangeColor);

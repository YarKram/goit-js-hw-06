function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("div#boxes");
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";

const create = document.querySelector("[data-create]");

const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input[type='number']");

let boxDimensions = 30;

function createBoxes(amount) {
	amount = input.value;
	for (let i = 0; i < input.value; i += 1, boxDimensions += 10) {
		const box = document.createElement("div");
		box.classList.add("box");
		box.style.width = boxDimensions + "px";
		box.style.height = boxDimensions + "px";
		box.style.backgroundColor = `${getRandomHexColor()}`;

		boxes.append(box);
	}
}

function destroyBoxes() {
	let element = boxes;
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

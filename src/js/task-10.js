function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// parent div
const boxes = document.querySelector("div#boxes");
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
// const for buttons
const create = document.querySelector("[data-create]");

const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input[type='number']");

const elements = [];
elements.length = input.value;

// create.addEventListener("click", () => {
// 	for (let i = 0; i < elements.length; i += 1) {
// 		const box = document.createElement("div");
// 		box.classList.add("box");
// 		box.style.width = "30px";
// 		box.style.height = "30px";
// 		box.style.backgroundColor = `${getRandomHexColor()}`;
// 		boxes.append(box);
// 	}
// });

create.addEventListener("click", createBoxes(5));
function createBoxes(amount) {
	input.value = amount;
	for (let i = 0; i < elements.length; i += 1) {
		const box = document.createElement("div");
		box.classList.add("box");
		box.style.width = "30px";
		box.style.height = "30px";
		box.style.backgroundColor = `${getRandomHexColor()}`;
		boxes.append(box);
	}
}
console.log(createBoxes(4));

// destroy.addEventListener("click", () => {
// 	document.location.reload();
// });

/*
1. Создать функцию createBoxes(amount)
2. Функция принимает число, это число - количество элементов div, которы
2.1.2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px
3. Создать функцию очистки destroyBoxes(), eventlistener на destroy => удалить все єлементы
*/

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

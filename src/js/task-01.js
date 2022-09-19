// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categories = document.querySelectorAll(".item");

const showAllCategories = (categories) => {
	categories.forEach((category) => {
		const showHeader = category.firstElementChild.textContent;
		const numberOfElements = category.querySelectorAll("li");

		console.log(`Categories: ${showHeader}`);
		console.log(`Elements: ${numberOfElements.length}`);
	});
};

showAllCategories(categories);

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

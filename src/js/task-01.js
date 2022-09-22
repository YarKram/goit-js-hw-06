const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categories = document.querySelectorAll(".item");

const showAllCategories = (categories) => {
	categories.forEach((category) => {
		const showHeader = category.firstElementChild.textContent;
		const numberOfElements = category.lastElementChild.children.length;

		console.log(`Categories: ${showHeader}`);
		console.log(`Elements: ${numberOfElements}`);
	});
};

showAllCategories(categories);

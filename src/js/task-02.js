const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
	const element = document.createElement("li");
	element.textContent = ingredient;
	element.classList.add("item");
	ingredientsRef.append(element);
	// console.log(ingredientsRef);
});

/*
Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>

В JavaScript есть массив строк.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, который для каждого элемента массива ingredients: foreach

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое. classlist.add.textcontent
Добавит элементу класс item. classlist.add('.item')
После чего вставит все <li> за одну операцию в список ul#ingredients. ul.append
*/

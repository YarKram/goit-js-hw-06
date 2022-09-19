// whole form
const form = document.querySelector("form.login-form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	input.forEach((elem) => {
		if (elem.value === "") {
			alert("All fields must be filled!");
		}
	});
	const {
		elements: { email, password },
	} = event.currentTarget;
	const data = {
		email: email.value,
		password: password.value,
	};
	console.log(data);
	form.reset();
});

// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

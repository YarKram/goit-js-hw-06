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

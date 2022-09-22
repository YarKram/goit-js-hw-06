const inputRef = document.querySelector("input#name-input");

console.dir(inputRef);

const spanNameRef = document.querySelector("span#name-output");

console.log(spanNameRef);

inputRef.addEventListener("input", () => {
	spanNameRef.textContent = "" ? "Anon" : inputRef.value;
});

// Зробив як було сказано, change у мене відігравав роль автозаповнення span при видаленні текстового контенту з input

// inputRef.addEventListener("change", () => {
// 	if (inputRef.value === "") {
// 		spanNameRef.textContent = "Anonymous";
// 	}
// });

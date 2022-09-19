const inputRef = document.querySelector("input#name-input");

console.dir(inputRef);

const spanNameRef = document.querySelector("span#name-output");

console.log(spanNameRef);

inputRef.addEventListener("input", () => {
	spanNameRef.textContent = inputRef.value;
});

inputRef.addEventListener("change", () => {
	if (inputRef.value === "") {
		spanNameRef.textContent = "Anonymous";
	}
});

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

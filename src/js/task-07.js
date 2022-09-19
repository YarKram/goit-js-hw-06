const inputRef = document.querySelector("input#font-size-control");

const textRef = document.querySelector("span#text");

inputRef.addEventListener("input", () => {
	textRef.style.fontSize = inputRef.value + "px";
});

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

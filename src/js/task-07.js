const inputRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");
textRef.style.fontSize = `${inputRef.value}px`;
const onSizeControl = () => {
	textRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", onSizeControl);

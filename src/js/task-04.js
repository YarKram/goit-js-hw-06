let counterValue = 0;

const valueRef = document.querySelector("#value");

const decrementButtonRef = document.querySelector(`[data-action="decrement"]`);

const incrementButtonRef = document.querySelector(`[data-action="increment"]`);

decrementButtonRef.addEventListener("click", () => {
	const totalDecr = (counterValue -= 1);
	valueRef.textContent = totalDecr;
});

incrementButtonRef.addEventListener("click", () => {
	const totalIncr = (counterValue += 1);
	valueRef.textContent = totalIncr;
});

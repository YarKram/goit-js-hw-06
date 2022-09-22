const inputVerificationRef = document.querySelector("#validation-input");
const onVerificationInput = () => {
	if (
		inputVerificationRef.value.length ===
		Number(inputVerificationRef.dataset.length)
	) {
		inputVerificationRef.classList.remove("invalid");
		inputVerificationRef.classList.add("valid");
	} else {
		inputVerificationRef.classList.remove("valid");
		inputVerificationRef.classList.add("invalid");
	}
};

inputVerificationRef.addEventListener("blur", onVerificationInput);

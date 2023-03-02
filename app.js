// Get the input field element
const submitBtn = document.getElementById("submit");
const inputField = document.getElementById("number");
const errorMsg = document.getElementById("error-msg");
const resultElement = document.getElementById("result");

let error = 0;
// Listen for changes to the input field
submitBtn.addEventListener("mouseover", (button)=>{
	// Get the current value of the input field
	const value = inputField.value;
	// Check if the value is a valid integer
	if (!Number.isInteger(Number(value)) || isNaN(value) || value <= 0) {
		errorMsg.style.animation="fadeIn 1s forwards";
		button.target.classList.toggle("move");
		submitBtn.style.background="linear-gradient(75deg, #cc7700 0%, #d62828 52%)";
		inputField.value = "";
		error = 1
	}
});


submitBtn.addEventListener("mouseout", (event) =>{
	if(error == 1)
	{
		setTimeout(() => {
			errorMsg.style.animation="fadeOut 1s ";
			error = 0;
		}, 5000);
	}
});


submitBtn.addEventListener("click", ()=>{
	const value = inputField.value;
		let sum = 0;
		for(let i = 1; i <= value ;i++)
		{
			sum += i;
		}
		resultElement.style.opacity = "0";
		resultElement.textContent = `The sum of numbers from 1 to ${value} is ${sum}.`;
		resultElement.style.opacity = "1";
})

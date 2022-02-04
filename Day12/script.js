// 1. Create a function that takes the age in years and returns the age in days.
const text = document.createElement("p");
const input = document.createElement("input");
const submit = document.createElement("button");
submit.textContent = "submit";
const result = document.createElement("p");

text.textContent = "Please enter your age : ";

function calcAge(age) {
  if (age !== "" && age != NaN && age > 0) {
    return (result.textContent = `you are live for ${age * 365} Day and ${
      age * 365 * 24
    } Hours and ${age * 365 * 24 * 60} minutes`);
  } else {
    return (result.textContent = "Please enter a valid number");
  }
}

submit.addEventListener("click", () => {
  calcAge(input.value);
});

document.body.append(text, input, submit, result);

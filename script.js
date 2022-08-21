const error = document.querySelector("#error");
const numberInput = document.querySelector("#number");
const numbersContainer = document.querySelector(".numbers");
const form = document.querySelector("form");

function primeNumber(number) {
  let isPrime = true;
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }
}

function isOddOrEvenOrPrime(num) {
  if (primeNumber(num)) {
    return "#FD5E53";
  }
  if (!(num % 2)) {
    return "#20BF73";
  }
  if (num % 2) {
    return "#FCDB3A";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  numbersContainer.innerHTML = "";
  if (!numberInput.value.trim()) {
    numberInput.style.borderColor = "red";
    return (error.innerText = "Required this field");
  }
  if (isNaN(parseInt(numberInput.value.trim()))) {
    numberInput.style.borderColor = "red";
    return (error.innerText = "Not valid number");
  }
  error.innerText = "";
  numberInput.style.borderColor = "#5ABC7A";
  const rangeNumber = +numberInput.value.trim();
  console.log(rangeNumber);
  for (let i = 1; i < rangeNumber; i++) {
    const div = document.createElement("div");
    div.innerText = i;
    div.style.color = "white";
    div.style.backgroundColor = isOddOrEvenOrPrime(i);
    numbersContainer.appendChild(div);
  }
  numberInput.value = "";
});

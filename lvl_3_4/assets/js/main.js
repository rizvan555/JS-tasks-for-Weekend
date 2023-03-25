function checkCount() {
  const input = document.querySelector(".inputNumber");
  const result = document.querySelector(".result");
  const select1 = document.querySelector("#select1");
  const select2 = document.querySelector("#select2");

  if (input.value === "") {
    result.innerHTML = "Check your count!";
  }
  let sum = 0;
  for (let i = 0; i <= input.value; i++) {
    if (i % select1 === 0 || i % select2 === 0) {
      sum += i;
    }
  }
  result.innerHTML = "Sum: " + sum;
}

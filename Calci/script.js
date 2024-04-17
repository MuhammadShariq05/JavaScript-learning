const input = document.getElementById("number-input");
const result = document.getElementById("result");

function handleClickButton(el) {
  console.log(el.innerText);
  const exp = `${input.value}${el.innerText}`;
  input.value = exp;
  //here this if statement is used coz, when we were using +,-,*,/.. it was showing error coz wo evaluate nhi kar pa raha tha, now this code says agar ye saare expressions are toh unhe eval kardo
  if(['+', '-', '*', '/'].includes(el.innerText)) return;
  result.value = eval(exp);
}

function reset() {
  input.value = "";
  result.value = ""; 
}

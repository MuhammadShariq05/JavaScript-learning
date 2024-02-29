const button = document.getElementById("button");
const uname = document.getElementById("username");
const change = document.getElementById("start");

button.addEventListener("click", () =>{
  const value = uname.value;
  localStorage.setItem("Text", value);
  location.reload();
});

window.addEventListener("load", () =>{
  const value = localStorage.getItem("Text");
  console.log(value);
  change.innerText = value;
});
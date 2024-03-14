function main(name){

  function call(){
    console.log(name);
  }

  return call;
}

let run = main("Muhammad");
console.log(run);
run();


function adder(num){
  function add(b){
    console.log(num + b);
  }

  return add;
}

const addTo5 = adder(5);
const addto10 = adder(10);
addTo5(2)
addto10(5)


// changing text size using closure

const namea = document.getElementById("name");
const button = document.getElementById("Button");

function texteSizer(size){

  function changeSize(){
    namea.style.fontSize = `${size}px`;
  }

  return changeSize;
}

const addsize20 = texteSizer(20);
const addsize12 = texteSizer(12);
const addsize70 = texteSizer(70);
const addsize10 = texteSizer(10);
const addsize5 = texteSizer(5);

addsize20();

button.addEventListener("click", addsize70);
// IIFE Immediately Invoked Function Expression

(function add(a, b) {
  console.log(a + b);
})(2, 3); // invoking the function, imediately it gets recalled

console.log(5 + 6);


// we can use it in any function, arrow function, async function etc..
// we cal also assign a value to the iife function

const value = (()=> 100)();
console.log(value);

// const data = (async () => await fetch())();

// ATM

const atm = function (initialbalance){
  let balance = initialbalance; // private varaible

  function withdraw(amt){
    if(amt > balance){
      return "Insufficient Balance";
    } else{
      balance -= amt;
      return balance;
    }
  }
  return {withdraw}; // here i had done a biggest silly mistake, where i had put the withdraw function inside itself, instead i have to return it/call inside atm function.
}

const shariq = atm(1000);
console.log(shariq.withdraw(200));
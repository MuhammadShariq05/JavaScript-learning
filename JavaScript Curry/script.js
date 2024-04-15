// this is called currying in java script
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const a = add(2)(3)(5);
console.log(a);

// making an autoemail using it

function autoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `Sending email to ${to} with a subject ${subject} -> message ${body}`
      );
    };
  };
}

let step1 = autoEmail("shariqwrk1@gmail.com");
let step2 = step1("Understanding currying in javaacript");
console.log(step2("hey did shariq u understood the concept?"));

// advnace method to do these, ES6

const add2 = (a) => (b) => (c) => a + b + c;
console.log(add2(4)(5)(6));

const makeEmail = (too) => (sub) => (bod) =>
  `Sending emial to ${too}, subject ${sub}, body ${bod}.`;

  console.log(makeEmail("shariqmello9123@gmail.com")("using advance method")("Email reached"))
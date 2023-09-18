//Activity 1
console.log("Activity 1");

const helloCodenation = () => {
  console.log("Hello Codenation");
};
helloCodenation();
console.log("");

const hello2 = (amount, fun) => {
  for (let i = 0; i < amount; i++) {
    fun();
  }
};

hello2(7, helloCodenation);
console.log("");

//Activity 2
console.log("Activity 2");

const array = [1, 2, 3, 4, 5];
console.log(array);

const map1 = array.map((x) => x * 3);
console.log(map1);

console.log("");

//Activity 3
console.log("Activity 3");

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};
console.log(doMaths(3)(5, multiply));
console.log("");

/**************
 * Inner Function / Nested Function
 ************/

// function outerFn() {
//   function innerFn() {
//     console.log("Inner Function call");
//   }
//   innerFn();
//   console.log("Outer Function Call");
// }
// outerFn();

function calculator(a, b) {
  function sum() {
    return a + b;
  }
  function sub() {
    return a - b;
  }
  function times() {
    return a * b;
  }
  function div() {
    return a / b;
  }
  return sum() + sub() + times() + div();
}
result = calculator(10, 5);
console.log(result);

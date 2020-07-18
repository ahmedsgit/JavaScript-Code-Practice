/***********
 * higher Order Function
 ************/

var arr = ["Sazzad", "Touhid", "Ashique"];

//call back function
arr.forEach(function (elements) {
  console.log(elements);
});

//function call in return
function caller() {
  return function (name) {
    return "Function calling - " + name;
  };
}

var result = caller()("Apu");

console.log(result);

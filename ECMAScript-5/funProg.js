/***
 * Functional Programming
 */
function sayName(name) {
  return `Hlw, ${name}`;
}

//1. A function Can be Stored in a variable
// var callName = sayName; //reference Send
// console.log(callName);
// var nameCall = sayName("Sazzad");
// console.log(nameCall);
// console.log(callName("Touhid"));

//2.A function can be Stored in an Array
// var arr = [1, 2, "sa", 3, 4, sayName];
// arr.push(sayName);
// //arr.pop();
// console.log(arr);

//3.A function can be Stored in an Object
// var person = {
//   name: "Sazzad",
//   sayName: sayName,
//   print: function () {
//     console.log("hi");
//   },
// };
// person;
// console.log(person.sayName(person.name));

//4. Create Function as needed
// var sum =
//   10 +
//   (function () {
//     return 50;
//   })(); //self invoking function
// console.log((sum += 1));

//5.We can Pass a function as an Argument
// function wow(name, fun) {
//   return fun(name);
// }
// console.log(wow("Asique", sayName));

// 6. return Function From Another Function
function power(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

// var result = power(2);
// var fResult = result(10);
// console.log(fResult);

var result = power(3)(5);
result;
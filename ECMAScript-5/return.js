/**
 * return Function from other Function
 */

// function host() {
//   console.log("i'm Host Function");
//   return function () {
//     console.log("I'm Child");
//   };
// }
// var h = host();
// var newH = host()();
// console.log(typeof h);

//another way
// function host() {
//   console.log("i'm Host Function");
//   function child() {
//     console.log("I'm Child");
//   }
//   return child;
// }
// //var h = host()();
// var h = host();
// h();

//new

// function greeting(msg) {
//   return function (name) {
//     console.log(`${name} ${msg}`);
//   };
// }
function greeting(msg) {
  function ret(name) {
    console.log(`${name} ${msg}`);
  }
  return ret;
}
var morning = greeting("Good Morning");
var afterNoon = greeting("Good Afternoon");

morning("Hi");
afterNoon("Hi");

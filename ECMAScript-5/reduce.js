/****
 * reduce Function
 */
var arr = [12, 45, 76, 21, 98, 21, 3, 11, 98, 72, 59, 82];
////using Function
// function sum(array) {
//   var sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     sum += array[index];
//   }
//   return sum;
// }
// var result = sum(arr);
// result;

var newArray = arr.reduce(function (a, b) {
  return a + b;
});

console.log(newArray);

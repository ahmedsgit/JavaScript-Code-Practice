/***
 * Filter Function
 */

var arr = [12, 45, 76, 21, 98, 21, 3, 11, 98, 72, 59, 82];

// newArr = [];
// function findEven(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr.sort(function (a, b) {
//     return a - b;
//   });
// }
// console.log(findEven(arr));

//using filter

// var newArr = arr.filter(function (element) {
//   return element % 2 == 0;
// });
// console.log(newArr);

//my own Filter function
function myFilter(arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var newArr = myFilter(arr, function (element) {
  return element % 2 == 0;
});
console.log(newArr);

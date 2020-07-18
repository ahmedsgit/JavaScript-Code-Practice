/***
 * Map function
 * create my own map function
 */

var arr = [12, 45, 76, 21, 98, 21, 3, 11, 98, 72, 59, 82];

// var newArr = [];

// for (var i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] + 2);
// }

//using map
//var newArr = arr.map((value) => value + 2);
//newArr

//my map function
function myMap(arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

var newArr = myMap(arr, (value) => value + 2);

newArr;

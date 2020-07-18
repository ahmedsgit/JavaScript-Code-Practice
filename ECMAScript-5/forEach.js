/****
 * ForEach Function call
 * make for each function
 */

var arr = [12, 45, 76, 21, 98, 21, 3, 11, 98, 72, 59, 82];

// arr.forEach(function (element, index) {
//   console.log(`Element ${index + 1}: ${element}`);
// });

//make our forEach loop using call back fn
function ele(element, callBack) {
  for (var index = 0; index < element.length; index++) {
    callBack(element[index], index);
  }
}

ele(arr, function (element, index) {
  console.log(`Element ${index + 1}: ${element}`);
});

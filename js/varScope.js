/**
 * Using let:
      -let keyword is assigned the block scope.
      -let cannot be re-declared.
      -Can be reassigned a value.
* Using const:
      -It is block scope.
      -Cannot be re-declared.
      -Cannot be reassigned a value.
* Using var:
      -var can be re-declared.
      -can be reassigned a value
 */
const pi = 3.1416;

function circleArea(r) {
    let area = pi * Math.pow(r, 2);
    return area;
}
var area = circleArea(5);

console.log(parseFloat(area).toFixed(2));
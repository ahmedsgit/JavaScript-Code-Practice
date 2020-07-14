/* Coercion: Coercion is simply a technique where JS tries to interpret and do some things for you.
 *Some values are interpret as false:
        - null,undefined,'',false and 0.
 */
//Some test
const num = 5 + true; //true is consider as 1 and false is 0.

const str = num + ""; //implicit coercion
var something = String(num); //explicit coercion

console.log(something);
console.log(typeof something);

var cal = 1.05 * 1000 * 1000 * 1000 * 1000 * 10000 * 1000 * 1000 * 1000;
console.log(cal);
console.log(typeof cal);

//example:1
const store = NaN;

if (store) {
    console.log('Allow in Storage'); //true if not false
} else {
    console.log('Not Allowed'); //execute this line if value(null,undefined,'',NaN,false and 0)
}
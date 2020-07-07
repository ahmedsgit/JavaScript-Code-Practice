/***
 * Arrow Function
 * Anonymous Function
 */

var add = (...value) => {
    let sum = 0;
    for (let i of value)
        sum += i;
    return sum;
}

console.log(add(1, 2, 3));
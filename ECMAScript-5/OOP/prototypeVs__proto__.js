/**
 * Difference Between Prototype and __proto__
 */

function fun(a, b) {
    this.a = a;
    this.b = b;
}



var obj1 = new fun(1, 2);
/********
 * this keyword
 * new keyword
 */

var obj = {
    name: 'Ahmed Sazzad',
    print: function () {
        //console.log(this);
        console.log('Name: ' + this.name);
    }
}

// function myFunction() {
//     function inner() {
//         console.log(this)
//     }
//     new inner();
// }

// var objFun = obj.print;
// objFun()

// var newPrint = obj.print.bind(obj);

// console.log(newPrint);

// newPrint()
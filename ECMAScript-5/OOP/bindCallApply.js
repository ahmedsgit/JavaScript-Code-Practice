/****
 * Bind 
 * call
 * apply
 */

// function printeMe() {
//     console.log('Hi ' + this.name);
// }

// var obj1 = {
//     name: 'Sadia Ahmed',
//     age: 22,
// }

// var obj2 = {
//     name: 'Ahmed Sazzad',
//     email: 'sazzad@gmail.com',
// }
// //Bind function
// var binded = printeMe.bind(obj1);
// binded()

// printeMe.call(obj1, obj2)

function info(prePro, curPro) {
    var totalProject = prePro + curPro;
    var payment = totalProject * 5;
    console.log(`Hi ${this.name}.\nYou Done: ${totalProject} projects.\nDue Payment: ${payment}$`);
}

var person = {
    name: 'Ahmed sazzad',
    email: 'sazzad@gmail.com'
}

var des = info.call(person, 10, 2);
var des = info.apply(person, [10, 2])
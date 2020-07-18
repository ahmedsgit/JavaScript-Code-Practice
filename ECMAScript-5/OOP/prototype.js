function person(name, age) {
    this.name = name;
    this.age = age;
}
// person.prototype.print = function () {
//     console.log(`hello ${this.name}`);
// }
// person.prototype.New = function () {
//     console.log(this.name, this.age);
// }

// person.prototype.email = 'ulebaba@gmail.com';

person.prototype = {
    email: 'something@gmail.com',
    hello: function () {
        console.log(`hello ${this.name}`);
    },
    des: function (email) {
        console.log(`Mr. ${this.name}(${this.age})\nEmail:${this.email}`);
    }
}



var obj1 = new person('Ahmed Sazzad', 26);
var obj2 = new person('Touhidul Islam', 28);

//obj1.des('abalum@gmail.com')
//console.log(person.prototype);
//obj1.print();
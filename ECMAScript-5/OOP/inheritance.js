// function members() {
//     this.name = 'Ahmed Sazzad';
// }

// function role() {
//     members.call(this);
//     this.role = 'Backend developer';
// }
// var info = new role()
// console.log(`Hlw ${info.name}\nYou are awesome ${info.role}.`);


function person(name) {
    this.name = name;
}
person.prototype.info = function () {
    console.log('Name:' + this.name);
    console.log('He is: ' + this.position);
}

person.prototype.msg = function () {
    console.log('Do work properly, hope and passion is so much important.');
}

function dMember(name, position) {
    person.call(this, name);
    this.position = position;
}

dMember.prototype = Object.create(person.prototype);
dMember.prototype.constructor = dMember;

var des = new dMember('Ahmed Sazzad', 'Backend Developer');

des.info()
/****
 * New Keyword
 */
function animal(name) {
    this.name = name;
}

animal.prototype.printName = function () {
    console.log(this.name);
}


// var cat = new animal('I\'m a Cat');
// var dog = new animal('I\'m a Dog');

// cat.printName();
// dog.printName();


//My Own New KeyWord
function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

var cat = myNew(animal, 'cat');
cat.printName();


var person = function (name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.des = function () {
    console.log(`Hi ${this.name}\nYour Age: ${this.age}`)
}

var per1 = myNew(person, 'Ahmed Sazzad', 26);

per1.des()
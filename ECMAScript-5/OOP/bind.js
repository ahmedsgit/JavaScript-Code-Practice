/***
 * Bind Method
 */

// function add(num) {
//     return this.value + num;
// }

// var obj1 = {
//     value: 10
// }

// var obj2 = {
//     value: 20
// }

// var binded = add.bind(obj1);
// var result = binded(20);

// result


var person = {
    name: 'Ahmed Sazzad',
    print: function () {
        //var newName = this.name;
        setTimeout(function () {
            //console.log(this);
            console.log(`${this.name} is Awesome`);
        }.bind(this), 2000);
    }
}

person.print()
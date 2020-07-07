// work with object

var person = {
    name: 'Ahmed sazzad',
    age: 25,
    des: {
        qualification: 'Web Developer',
        language: 'JS and Python',
    },
    education: {
        University: 'East West University',
        passingYear: 2019,
    }
}
//person's Method in outside
person.print = function () {
    console.log(`Hello ${this.name}\nYou are an Awesome ${this.des.qualification}.`);
}

person.print();
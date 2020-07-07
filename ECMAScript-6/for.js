/*****
 * For in Loop
 * For of loop
 */
//Object
var info = {
    name: 'Ahmed Sazzad',
    age: 25,
    language: ['JS', 'Python', 'C', 'PHP', 'C++', 'Java'],
    print: function () {
        console.log(`My name is ${this.name}`);
    }
}

//For of Loop
console.log(`${info.name} knows: `)
for (let props of info.language) {
    console.log(`\t\t${props}`);
}


//For in Loop
console.log('About this Object Person:');
for (let props in info) {
    if (props == 'language')
        break;
    else
        console.log(`\t\t\t${props} : ${info[props]}`);
}
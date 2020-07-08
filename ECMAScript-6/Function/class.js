/***
 * Class 
 * Class constructor
 */

class person {
    constructor(name) {
        this.name = name;
        this.language = ['JS', 'Python', 'C#']
        console.log(`Welcome Mr. ${name}.`);
    }
    qualification() {
        console.log(`Qualifications: ${this.language}`)
    }

}

var obj = new person('Ahmed Sazzad');
obj.qualification()
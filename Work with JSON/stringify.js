/**
 * Stringify converts JS data into JASON data.
 */

var dataJS = {
    name: 'Ahmed Sazzad',
    age: 25,
    speciality: {
        language: ['JS', 'C', 'Python', 'C#'],
        frameworks: ['React', 'Vue', 'Django']
    }

}
var dataJSON = JSON.stringify(dataJS);
console.log(dataJSON)
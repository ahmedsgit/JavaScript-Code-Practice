/**
 * Parse converts JSON data into JavaScript data.
 */

var JSONdata = '{"Name": "Ahmed Sazzad","Age": 25,"Role": "Web Developer"}';
console.log(typeof (data));
var dataJS = JSON.parse(JSONdata);
console.log(typeof (dataJS));
console.log(dataJS.Name);
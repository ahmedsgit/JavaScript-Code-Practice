/***
 * Selector in Document Object Model
 */
//label dom
let form = document.getElementById('myForm');
let label = document.createElement('label');
let labelText = document.createTextNode('Password:');
label.setAttribute('for', 'password');
label.appendChild(labelText);
form.appendChild(label);

//input dom
let input = document.createElement('input');
input.setAttribute('type', 'password');
input.setAttribute('id', 'password');
input.setAttribute('name', 'password');
input.setAttribute('value', '1234');

form.appendChild(input);
document.appendChild(form);
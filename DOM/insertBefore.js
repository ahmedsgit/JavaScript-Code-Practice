/***
 * Node.InsertBefore() - add element before node
 */

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.textContent = 'Insert Before Node:'
document.body.appendChild(h1);

let ul = document.createElement('ul');
let li = document.createElement('li');
li.setAttribute('id', 'address');
ul.setAttribute('id', 'myList');
document.body.appendChild(ul);

let myList = document.getElementById('myList');
let address = document.getElementById('address');
li.textContent = 'Dhaka,Bangladesh';
myList.appendChild(li);


//insert name before address
let newLi = document.createElement('li');
newLi.setAttribute('id', 'name');
newLi.textContent = 'Ahmed Sazzad';
myList.insertBefore(newLi, li);
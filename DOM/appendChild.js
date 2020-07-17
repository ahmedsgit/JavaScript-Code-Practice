/***
 * Child Parent relation in DOM
 */

const ul = document.createElement('ul');
ul.setAttribute('id', 'myList');

// add h1
const h1 = document.createElement('h1');
h1.textContent = 'My Drink';
ul.appendChild(h1);
document.body.appendChild(ul);

//add list
const myList = document.getElementById('myList');
const drinkList = ['Coffee', 'Tea', 'Soft Cola', 'Cold Coffee'];

for (let list of drinkList) {
    const li = document.createElement('li');
    li.textContent = list;
    myList.appendChild(li);
}
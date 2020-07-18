/****
 * Dataset Property - allow get and set the values of custom data attributes.
 */

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.textContent = 'Data Set Property:'
document.body.appendChild(h1);

//dataset 

let div = document.createElement('div');
div.setAttribute('id', 'myDiv');
div.setAttribute('data-name', 'Ahmed Sazzad');
div.setAttribute('data-started-coding-at', '19');

document.body.appendChild(div);


const myDiv = document.getElementById('myDiv');

//dataset removed from html but still in JS
myDiv.dataset.name = '';

//remove form all
myDiv.removeAttribute('data-started-coding-at');

console.log(myDiv.dataset);
/****
 * Create a Text node by js
 */

//create Tag
var h1 = document.createElement('h1');

//create Text which will add into h1 tag
var text = document.createTextNode('Hlw Github');

//add text into selected tag
h1.appendChild(text);
document.querySelector('body').appendChild(h1);
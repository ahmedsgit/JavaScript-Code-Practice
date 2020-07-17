/***
 * Document Fragments - a virtual invisible HTML element. 
 */

//add in html first
{
    /* <h1 id="title">Document Fragment</h1>
        <ul id="myList">

        </ul> */
}

const myList = document.getElementById('myList');
const createFrag = document.createDocumentFragment();

const prog = ['Vanilla JS', 'React JS', 'Vue JS', 'Node JS', 'Angular JS'];
var newList = new Array();

for (let list of prog) {
    var item = document.createElement('li');
    item.textContent = list;
    createFrag.appendChild(item);
}
myList.appendChild(createFrag);
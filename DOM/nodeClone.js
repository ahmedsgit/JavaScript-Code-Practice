/***
 * Clone Node 
 */
//add first this html before js run
{
    /* <h1 id="title">Node Clone</h1>
    <ul id="myList">
        <li>Apple</li>
        <li>Banana</li>
        <li>Pears</li>
    </ul> */
}
let myList = document.getElementById('myList');
let listItem = myList.children;

//cloning node and parameter true means value passing 
let copyItem = listItem[0].cloneNode(true);
myList.appendChild(copyItem);
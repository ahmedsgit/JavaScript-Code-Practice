/**
 * Node.NextElementSibling Property
 */

//Add this HTML first
{
    /* <h1 id="title">Next Sibling Element</h1>
        <ul id="myList">
            <li>React Native</li>
            <li>Nest JS</li>
            <li>Angular JS</li>
        </ul> */
}
//get first Child of myList
let firstChild = document.querySelector('#myList>li:first-of-type');
let nextChild = firstChild.nextElementSibling;
console.log(nextChild);
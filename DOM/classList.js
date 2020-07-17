/***
 * classList - add/remove/toggle class in html element
 * add() = add class to html element
 * remove() = remove class from html element
 * toggle() = remove class in first time, if it call again then add this class class from html element.
 * replace(className, replaceBy) = replace class in html element.
 */
//add this html in body before call this js
{
    /* <h2 id="title">Class List</h2>
    <p id="myP">Hlw Github</p> */
}

const myP = document.getElementById('myP');

myP.classList.add('niceBg', 'whiteText')
setTimeout(() => {
    myP.classList.remove('niceBg')
}, 1000);
setTimeout(() => {
    myP.classList.replace('whiteText', 'bigText');
}, 2000);

setTimeout(() => {
    myP.classList.add('whiteText')
}, 4000);
// myP.classList.toggle('bigText');
// myP.classList.toggle('bigText');
console.log(myP.classList);
console.log(myP.classList.contains('whiteText'));
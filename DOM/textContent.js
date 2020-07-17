/****
 * Text Content - Js DOM
 */

// create h1
let h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
let titleText = document.createTextNode(`This is Github`);
h1.appendChild(titleText);
document.body.appendChild(h1);
console.log(h1);

// create alert
let title = document.getElementById('title');

//alert 
// alert(title.textContent);


//change text in h1 tag
title.textContent = `I'm Ahmed Sazzad`;
//change it again by innerHTML
title.innerHTML = `<em>Hi Github friend</em>`;
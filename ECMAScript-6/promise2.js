/**
 * Fetch API
 */

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((body) => {
        const list = body.map(data => {
            let li = document.createElement('li');
            let text = document.createTextNode(`Name: ${data.name}, Email: ${data.email}.`);
            li.appendChild(text);
            return li;
        })
        list.forEach((li) => {
            document.getElementById('myList').appendChild(li);
        })
    })
    .catch((err) => console.log(err))
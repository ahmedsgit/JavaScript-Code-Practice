/****
 * Async Await
 * Fetch API
 */

async function getUser() {
    const fetch = require("node-fetch");
    let response = await fetch('https://api.github.com/users/ahmedsgit');
    let data = await response.json();
    return data;
}

getUser()
    .then(data => console.log(`Id : ${data.id}`))
    .catch(err => console.log(err.message));
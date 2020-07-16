/***
 * Use of Promise
 */

let aPromise = new Promise((resolve, reject) => {
    let name = 'Ahmed Sazzad';
    setTimeout(() => resolve(name), 3000);
});

aPromise.then((name) => console.log("I'm " + name));
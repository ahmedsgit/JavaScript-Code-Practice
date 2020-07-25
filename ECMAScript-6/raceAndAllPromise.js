/***
 * Promise.race()- execute one promise which would come first: example-API
 * promise.all() - execute two or more promise as a array
 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('From promise 1');
    }, 2000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('From promise 2');
    }, 1000);
})
//second promise will be called because it takes 1 seconds to execute
Promise.race([promise1, promise2])
    .then(data => console.log(data))
    .catch(err => console.log(err));
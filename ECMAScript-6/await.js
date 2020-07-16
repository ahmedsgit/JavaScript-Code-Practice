/***
 * Async Await
 */

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}.`);
        if (location === 'Google') {
            resolve('Google Says hi');
        } else {
            reject('We can only talk with Google.');
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing Response');
        resolve(`Extra Information + ${response}`);
    })
}

// makeRequest('Google').then((response) => {
//     console.log('Response Received');
//     return processRequest(response);
// }).then(response => {
//     console.log(response);
// }).catch(err => console.log(err));

async function process() {
    try {
        const response = await makeRequest('Facebook');
        console.log('Response Received');
        const processResponse = await processRequest(response);
        console.log(processResponse);
    } catch (err) {
        console.log(err);
    }

}

process();
/***
 * Call Back Function
 */

let data = [{
    name: 'Ahmed Sazzad',
    Age: '26'
}, {
    name: 'Sadia Ahmed',
    Age: '22'
}]

function getName() {
    setTimeout(() => {
        let output = '';
        data.forEach((getName, index) => {
            output += `<li>${getName.name} is Awesome</li>`;
        });
        document.body.innerHTML = output;
    }, 1);
}

function addNew(member, callback) {
    setTimeout(() => {
        data.push(member);
        callback();
    }, 2);
}

addNew({
    name: 'Samia Ahmed',
    age: '12'
}, getName);
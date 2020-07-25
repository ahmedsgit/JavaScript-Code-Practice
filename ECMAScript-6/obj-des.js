/****
 * Object De-structuring
 */

const person = {
    name: 'Ahmed Sazzad',
    age: 25,
    address: {
        roadNo: 12,
        dis: 'Dhaka'
    }
}

const {
    name,
    address: {
        dis
    }
} = person;
console.log(dis);
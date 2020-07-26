/****
 * Object.getOwnPropertyDescriptors()
 * feature: value, writable, get, set, configurable and enumerable
 */
const obj = {
    name: 'Ahmed',
    get age() {
        return 25;
    },
    set name(name) {
        console.log(`Hi ${name}`);
    }
};

let a = Object.getOwnPropertyDescriptors(obj);

console.log(a);
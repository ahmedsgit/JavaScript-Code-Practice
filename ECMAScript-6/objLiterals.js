/***
 * Enhance Object Literals
 */
//city =city [same name] don't need to assign in object

const city = 'Dhaka';
const country = 'Bangladesh';
const cityKey = 'city';
const address = {
    [cityKey]: city,
    country
}

console.log(address)
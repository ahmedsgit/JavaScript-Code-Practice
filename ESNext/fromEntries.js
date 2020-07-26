/****
 * Object.fromEntries(): make a array property into object.
 */

const value = [
    ['country', 'Bangladesh'],
    ['city', 'Dhaka']
];

console.log(Object.fromEntries(value));
/**
 * Map Function -it can store duplicate values
 */
let country = new Map();

country.set('1', {
    name: 'England',
    rating: 127,
});
country.set('2', {
    name: 'India',
    rating: 119,
});
country.set('3', {
    name: 'New Zealand',
    rating: 116,
});
country.set('4', {
    name: 'Sounth Africa',
    rating: 108,
});
country.set('5', {
    name: 'Australia',
    rating: 107,
});
country.set('6', {
    name: 'Pakistan',
    rating: 102,
});
country.set('7', {
    name: 'Bangladesh',
    rating: 88,
});
country.set('8', {
    name: 'Sri Lanka',
    rating: 85,
});
country.set('9', {
    name: 'West Indies',
    rating: 76,
});
country.set('10', {
    name: 'Afghanistan',
    rating: 55,
});

for (i of country.keys()) {
    if (i > 8)
        country.delete(i);
}

//console.log(country.get('1'));

// for (i of country.values()) {
//     console.log(i);
// }

if (country.has('10')) {
    console.log('Can perform next WC');
} else {
    console.log('Cannot perform');
}
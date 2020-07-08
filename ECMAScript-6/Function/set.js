/***
 * set method - omit duplicate values
 */

var country = new Set();

country.add('Bangladesh');
country.add('Pakistan');
country.add('India');
country.add('USA');
country.add('Australia');
country.add('Australia');
country.add('Australia');
country.add('Australia');
country.add('Australia');
country.add('Australia');
country.add('Australia');

country.delete('Australia');
//country.clear();

for (i of country.values()) {
    console.log(i);
}

if (country.has('Bangladesh')) {
    console.log('Found');
} else {
    console.log('Not found');
}
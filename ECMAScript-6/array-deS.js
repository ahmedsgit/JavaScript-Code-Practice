/***
 * Array de-structuring
 */
var country = new Array('Bangladesh', 'India', 'USA');

var [myCountry, , ] = country;

var myHome = () => {
    console.log(`${myCountry} is Home.`)
}

myHome();
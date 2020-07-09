/***
 * Different import export Name/default import export
 */

//Import from china.js
import foreign from './china.js';

let chinaObj = new foreign();
let balance = chinaObj.phone('iPhone 11 Max Pro');
console.log(`price: ${balance}$`);
chinaObj.duePayment();
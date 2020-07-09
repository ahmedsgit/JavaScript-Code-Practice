/***
 * Same name import export/named import export
 */

//Import from china.js
import {
    china,
    duePayment
} from './china.js';

let chinaObj = new china();
let balance = chinaObj.phone('iPhone 11 Max Pro');
console.log(`price: ${balance}$`);
console.log(`Previous Due: ${duePayment}`);
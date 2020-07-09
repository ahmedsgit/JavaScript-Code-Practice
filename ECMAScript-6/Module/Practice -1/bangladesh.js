//Import from china.js

import {
    china
} from './china.js';

let chinaObj = new china();
let balance = chinaObj.phone('iPhone 11 Max Pro');
console.log(`price: ${balance}$`);
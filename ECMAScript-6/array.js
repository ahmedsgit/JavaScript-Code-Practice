/***
 * 2D Array
 */
var country = new Array('Bangladesh', 'India', 'USA');
var board = new Array('Dhaka', 'Chittagong', 'Sylhet');
var district = new Array('Cox-Bazar', 'Madaripur', 'Narayongonj');
var me = {
    name: 'Ahmed Sazzad',
    address: [country, board, district],
    addressFun: function () {
        console.log(`I'm ${this.name}.\nAddress: ${me.address[2][2]}, ${me.address[1][0]}, ${me.address[0][0]}.`);
    }
}

me.addressFun();
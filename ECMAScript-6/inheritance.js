/****
 * Inheritance
 *  -super keyword
 *  -method overwriting
 */
class father {
    fatProps() {
        console.log("Father's property ");
    }
    balance() {
        return 10;
    }
    fatBalance() {
        console.log(`I've 10 dollar in  my pocket`);
    }
}
class child extends father {
    childProps() {
        console.log("child's property ");
    }
    //method overwrite
    fatBalance() {
        console.log(`I've ${super.balance()*10} dollar in  my pocket`);
    }
}

var obj = new child;
obj.fatBalance();
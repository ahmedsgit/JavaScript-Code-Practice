class china {
    constructor() {
        alert("Welcome to China Product.");
    }
    phone(phnName) {
        console.log(`You can Import ${phnName}.`);
        return 100;
    }
}
let duePayment = 2000;
export {
    china,
    duePayment
};
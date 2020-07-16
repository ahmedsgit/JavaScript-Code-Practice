/*****
 * Exception handling: try,catch, throw
 */

let conTaka = (dollar) => {
    if (typeof dollar === "number") {
        return dollar * 84.95;
    } else throw Error("Amount need to be a number");
};

try {
    console.log(conTaka(17));
} catch (error) {
    console.log(error.message);
}
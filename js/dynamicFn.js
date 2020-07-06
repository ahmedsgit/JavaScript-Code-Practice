// Dynamic function

var absolute = function (num) {
    if (num == 0)
        return num;
    else if (num < 0)
        return num * -1;
    else
        return num;
}

console.log('Absolute value: ' + absolute(-4));
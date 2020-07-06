// Rest Parameter

function Sum(what, ...values) {
    let sum = 0;
    for (let i of values) {
        sum += i;
    }
    console.log(`${what}: ${sum}`);
}

Sum('Summation', 12, 11, 5, 1.2);
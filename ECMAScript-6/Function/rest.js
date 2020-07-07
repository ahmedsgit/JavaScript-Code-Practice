var member = {
    name: 'Ahmed Sazzad',
    active: true,
    totalPayment: 0,
}

function totalPayment(...pro) {
    for (let i of pro)
        member.totalPayment += i;
    return member.totalPayment;
}

console.log(` ${member.name} received: ${totalPayment(110,22,34,40)}$`);
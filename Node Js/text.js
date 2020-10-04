const second = () => console.log('Second');
const third = () => console.log('Third');

const first = () => {
    console.log('First');
    while (true) {
        setTimeout(second, 5);
    }
    third();
};


first();
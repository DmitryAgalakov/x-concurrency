setTimeout(() => {
    console.log('timeout');
}, 0);

const p = new Promise((resolve, reject) => {
    console.log('Promise creation');
    resolve();
})

const p2 = new Promise((resolve, reject) => {
    console.log(123);
})

p.then(() => {
    console.log('Promise resolving', p2);
})

console.log('End');

console.log('p2 =>>', p2);

// Промис в консоли выглядит так: Promise { <pending> }
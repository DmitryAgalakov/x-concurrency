let a;
let p4 = new Promise(function (resolve) {
    console.log('TEST A1', a);
    a = 25;
    setTimeout(() => {
        console.log('TEST A2', a);
        resolve(a);
    }, 100);
});

setTimeout(function timeout() {
    a = 10;
    console.log('TEST A3', a);
}, 100);

p4.then(function (b) {
    console.log('TEST A4', a);
});

console.log('TEST A5', a);

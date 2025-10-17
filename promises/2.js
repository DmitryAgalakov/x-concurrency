console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log('1');
    resolve(2);
});

promise.then((res) => {
    console.log(res);
});

console.log('end');

// 1. Сначала выполняется синхронный код, затем асинхронный.

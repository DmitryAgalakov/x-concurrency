console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log('1');
});

promise.then((res) => {
    console.log(2);
});

console.log('end');

// 1. Сначала выполняется синхронный код, затем асинхронный.


// Объяснить код, рассказать какие консоли и в какой последовательности будут, а затем предложить более оптимальное решение
function resolveAfter2Seconds(x) {
    console.log(`Какой X пришёл -> ${x}`);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    });
}

async function add1(x) {
    console.log('add1 Hello');
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    console.log('add1 Bye')
    return x + a + b;
}

add1(10).then(console.log);

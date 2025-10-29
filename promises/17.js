const promise = new Promise(resolve => {
    setTimeout(() => resolve(2), 3000);
});

promise
    .then(value => {
        console.log(value);
        return new Promise(resolve => {
            setTimeout(() => resolve(value * 2), 3000);
        });
    })
    .then(value => {
        // Этот then получит экземпляр promise со статусом pending сразу,
        // но, только после его выполнения, начнёт выполнять код ниже.
        console.log("Промис выше выполнен, он вернул: value * 2 = ", value);
        return new Promise(resolve => {
            setTimeout(() => resolve(value * 2), 3000);
        });
    })
    .then(value => console.log(value));

const p = new Promise((resolve, reject) => {
    reject(Error('Всё сломалось :('));
})
    .catch((error) => console.log('1-я', error.message))
    .catch((error) => console.log('2-я', error.message));


// Одна цепочка операторов, поэтому если один catch отловил ошибку,
// остальным catch не нужно выполняться.

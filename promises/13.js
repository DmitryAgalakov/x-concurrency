const p3 = new Promise((resolve, reject) => {
    reject(Error('Всё сломалось :('));
})
    .then((error) => console.log('5-я', error.message))
    .catch((error) => console.log('6-я', error.message));
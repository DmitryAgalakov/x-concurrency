const p2 = new Promise((resolve, reject) => {
    reject(Error('Всё сломалось :('));
});
p2.catch((error) => console.log('3-я', error.message));
p2.catch((error) => console.log('4-я', error.message));


// Две различные цепочки, поэтому каждый catch работает независимо.
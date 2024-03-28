function highAndLow(numbers) {
    // ...
    numbers = numbers.split(' ').map(x => Number(x))
    let hi = -Infinity
    let low = Infinity
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > hi) hi = numbers[i]
        if (numbers[i] < low) low = numbers[i]
    }
    return hi + ' ' + low
}
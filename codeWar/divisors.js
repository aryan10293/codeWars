function divisors(integer) {
    let answer = []
    for (let i = 1; i < integer; i++) {
        integer % i === 0 && i !== 1 ? answer.push(i) : null
    }
    return answer.length >= 1 ? answer : `${integer} is prime`
};
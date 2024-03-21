function nbYear(pop, percent, aug, p) {
    // your code
    let answer = 0
    while (pop < p) {
        pop += Math.floor(pop * (percent / 100)) + aug
        answer++
    }
    return answer
}
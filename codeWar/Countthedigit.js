function nbDig(n, d) {
    // your code
    let arr = []
    let count = 0
    for (let i = 0; i <= n; i++) {
        arr.push(`${i * i}`)
    }
    arr.forEach(x => {
        for (let i = 0; i < x.length; i++) {
            if (x[i] === `${d}`) {
                count++
            }
        }
    })
    return count
}
function digitalRoot(n) {
    // ...
    n = `${n}`
    while (n.length > 1) {
        let num = 0
        for (let i = 0; i < n.length; i++) {
            num += Number(n[i])
        }
        n = `${num}`
    }
    return Number(n)
}
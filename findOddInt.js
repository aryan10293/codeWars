function findOdd(A) {
    //happy coding!
    let obj = {}

    for (let i = 0; i < A.length; i++) {
        if (!obj[A[i]]) {
            obj[A[i]] = 1
        } else {
            obj[A[i]] = obj[A[i]] + 1
        }
    }
    for (key in obj) {
        if (obj[key] % 2 === 1) {
            return Number(key)
        }
    }
}
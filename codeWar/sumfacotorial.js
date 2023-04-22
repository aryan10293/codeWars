function sumFactorial(arr) {
    let answer = 0
    for (let i = 0; i < arr.length; i++) {
        let cool = arr[i]
        for (let j = arr[i] - 1; j > 0; j--) {
            cool *= j
        }
        answer += cool
    }
    return answer
}
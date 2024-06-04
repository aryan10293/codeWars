function solve(arr) {
    arr = arr.reverse()
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if (!answer.includes(arr[i])) answer.push(arr[i])
    }
    return answer.reverse()
}
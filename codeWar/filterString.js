var filterString = function (value) {
    //Complete this function :)
    let lol = value.split('').map(x => Number(x))
    let answer = ''
    for (let i = 0; i < lol.length; i++) {
        if (lol[i] > -1) answer += lol[i]
    }
    return Number(answer)
}
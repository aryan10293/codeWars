function longest(s1, s2) {
    // your code
    let lol = s1 + s2
    let answer = ''
    lol.split('').sort().forEach(a => answer.includes(a) ? null : answer += a)
    return answer
}
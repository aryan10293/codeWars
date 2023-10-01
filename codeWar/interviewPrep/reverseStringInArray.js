var reverseWords = function(s) {
    let lol = s.split(' ')
    let answer = lol.map(x => {
        return x.split('').reverse().join('')
    }).join(' ')
    return answer
};
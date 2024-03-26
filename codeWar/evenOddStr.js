function sortMyString(S) {
    // your code here
    let cool = ''
    let beans = ''
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            cool += S[i]
        } else {
            beans += S[i]
        }
    }
    return cool + ' ' + beans;
}
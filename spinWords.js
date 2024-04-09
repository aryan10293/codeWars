function spinWords(string) {
    //TODO Have fun :)
    return string.split(" ").map(x => x.length >= 5 ? x.split('').reverse().join('') : x).join(' ')
}
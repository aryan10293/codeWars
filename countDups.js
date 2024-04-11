function duplicateCount(text) {
    //...
    text = text.toLowerCase()
    let lol = {}
    let cool = []
    for (let i = 0; i < text.length; i++) {
        if (!lol[text[i]]) {
            lol[text[i]] = 1
        } else {
            lol[text[i]] = lol[text[i]] + 1
        }
    }
    for (let key in lol) {
        if (lol[key] > 1) {
            cool.push(key)
        }
    }
    return cool.length
}
duplicateCount("aabbcde")
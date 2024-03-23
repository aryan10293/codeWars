function planeSeat(a) {
    a = a.split('')
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k']
    let letter = a.pop().toLowerCase()
    let num = Number(a.join(''))
    if (num > 60 || !arr.includes(letter)) return 'No Seat!!'
    if (num <= 20 && (letter === 'a' || letter === 'b' || letter === 'c')) return 'Front-Left'
    if (num <= 20 && (letter === 'd' || letter === 'e' || letter === 'f')) return 'Front-Middle'
    if (num <= 20 && (letter === 'g' || letter === 'h' || letter === 'k')) return 'Front-Right'

    if (num <= 40 && (letter === 'a' || letter === 'b' || letter === 'c')) return 'Middle-Left'
    if (num <= 40 && (letter === 'd' || letter === 'e' || letter === 'f')) return 'Middle-Middle'
    if (num <= 40 && (letter === 'g' || letter === 'h' || letter === 'k')) return 'Middle-Right'

    if (num <= 60 && (letter === 'a' || letter === 'b' || letter === 'c')) return 'Back-Left'
    if (num <= 60 && (letter === 'd' || letter === 'e' || letter === 'f')) return 'Back-Middle'
    if (num <= 60 && (letter === 'g' || letter === 'h' || letter === 'k')) return 'Back-Right'
}
planeSeat('20B')
    let alpha = 'qwertyuioplkjhgfdsazxcvbnm'
    let num = [1,2,3,4,5,6,7,8,9,0]
    let lol = s.toLowerCase().split('').filter(x => {
        if(alpha.includes(x) || num.includes(Number(x))) {
            if(x !== ' ') return x
        }
    })
    return lol.join('') === lol.reverse().join('')
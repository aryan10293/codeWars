function alphabetPosition(text) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    text = text.toLowerCase().split('')
    let lol = []
    text.forEach(x => {
      if(letters.includes(x)){
        lol.push(letters.indexOf(x) + 1)
      }
    })
    lol = lol.join(' ')
    return lol
  }
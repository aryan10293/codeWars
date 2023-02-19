function generateHashtag (str) {
    let lol = str.split(' ')
    let yay = []
    lol = lol.filter(x => {
      if(x !== ' '){
        return x
      }
    })
    lol.forEach(x => {
      let cool = ''
      for(let i = 0; i<x.length; i++){
        if(i === 0){
         cool += x[i].toUpperCase()
        } else {
          cool += x[i]
        }
      }
      yay.push(cool)
    })
      yay.unshift('#')
      yay = yay.join('')
    if(yay.length > 140 || yay.length === 1){
      return false
    } else {
      return yay
    }
    console.log(yay)
  }
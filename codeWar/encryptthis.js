var encryptThis = function(text) {
    // Implement me! :)
    text = text.split(' ')
    let lol = []
    text.forEach(x => {
      let yay = ''
      for(let i = 0; i<x.length; i++){
        if(i === 0){
          yay+= x.charCodeAt(0)
        } else if (i === 1){
          yay+= x[x.length - 1]
        } else if (i === x.length - 1){
          yay+= x[1]
        } else {
          yay+= x[i]
        }
      }
      lol.push(yay)
    })
    return lol.join(' ')
  }
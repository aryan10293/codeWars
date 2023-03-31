function countSmileys(arr) {
    let validEyes = [':', ';']
    let validNose = ['-', '~']
    let validSmile = [')', 'D']
    let validSmiles = 0
    arr.forEach(x => {
      if(x.length === 3){
        if(validSmile.includes(x[2]) && validNose.includes(x[1]) && validEyes.includes(x[0])) validSmiles++
      }
        if(x.length === 2){
        if(validEyes.includes(x[0]) && validSmile.includes(x[1])) validSmiles++
      }
    })
    return validSmiles
  }
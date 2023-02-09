function wave(str){
    // Code here
    str = str.split('')
    let answer = []
    str.forEach((x,i,l) => {
      if(str[i] === ' '){
      } else if(str[i] === x){
        str[i] = str[i].toUpperCase()
        answer.push(str.join(''))
        str[i] = str[i].toLowerCase()
      }
    })
    return answer
  }
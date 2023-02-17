function toWeirdCase(string){
    //TODO
    let answer = ''
    string = string.split(' ')
    string.forEach(x => {
      for(let i =0; i<x.length;i++){
        if(i%2 === 0 ){
          answer+=x[i].toUpperCase()
        } else {
          answer+=x[i].toLowerCase()
        }
      }
      answer+= ' '
    })
    return answer.slice(0, -1)
  }
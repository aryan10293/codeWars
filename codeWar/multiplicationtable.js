multiplicationTable = function(size) {
    // insert code here
    let answer = []
    for(let i = 1; i<=size; i++){
      let array = []
      for(let j = 1; j<=size; j++){
        let cool = i*j
        array.push(cool)
      }
      answer.push(array)
    }
    return answer
  }
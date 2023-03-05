function matrixAddition(a, b){
    //TODO
    let answer = []
    for(let i=0; i<a.length; i++){
      let arr = []
      for(let j = 0; j<a[i].length; j++){
        let cool = a[i][j] + b[i][j] 
        arr.push(cool)
      }
      answer.push(arr)
    }
    return answer
  }
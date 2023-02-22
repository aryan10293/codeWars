function dataReverse(data) {
    // Your code here
    let sike  = data.reverse()
    console.log(data === sike)
    let answer = []
    let answer2 = []
    let yee = 0
    for(let i = 0; i < data.length; i+=8){
      console.log(i)
       yee = data.slice(i, i+8)
      answer.push(yee.reverse())
    }
    answer.forEach(x => {
      x.forEach(w => {
        answer2.push(w)
      })
    })
  return answer2
  }
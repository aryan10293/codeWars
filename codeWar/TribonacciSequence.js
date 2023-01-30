function tribonacci(signature,n){
    //your code here
    const answer = []
      signature.forEach(x => {
      answer.push(x)
    })
    let cool = signature
    if(n === 0){
      return []
    } else if(n === 1){
      return [answer[0]]
    }
    for(let i = 3; i<n; i++){
      let yay = cool.reduce((a,b) => {return a+b},0)
      cool.shift()
      cool.push(yay)
      answer.push(yay)
    }
    return answer
  }
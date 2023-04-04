function sumDigPow(a, b) {
    // Your code here
    let answer = []
    for(let i = a; i<=b; i++){
      const lol = `${i}`.split('').map(x => Number(x))
      let num = 0
      lol.forEach((x,l) => {
           num += Math.pow(x, (l+1))
      })
      if(num === i) answer.push(i)
    }
    return answer
  }
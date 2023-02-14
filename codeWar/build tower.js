function towerBuilder(n) {
    // build here
    let answer = []
    let yay = 1
    for(let i = 1; i<=n; i++){
      let cool = ""
      let lost = ''
      if(n === 1){
        cool+= '*'
        answer.push(cool)
      } else if(i === 1){
        cool+= '*'
        for(let v = 0; v < n-1; v++){
          cool = " " + cool + " "
        }
        answer.push(cool)
      } else {
        yay+=2
        for(let j = 0; j < yay; j++){
          cool+= '*'
        }
        for(let v = 0; v < n-i; v++){
          lost+=' '
        }
        cool = lost + cool + lost
        answer.push(cool)
      }
    }
    console.log(answer)
    return answer
  }
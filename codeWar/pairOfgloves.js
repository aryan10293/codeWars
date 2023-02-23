function numberOfPairs(gloves){
    //My hands are freezing
    let obj = {}
    let answer = 0
   for(let i = 0; i<gloves.length; i++){
      if(!(gloves[i] in obj)){
        obj[`${gloves[i]}`] = 1
      } else {
        obj[`${gloves[i]}`] = obj[`${gloves[i]}`] + 1
      }
    }
    for (let key in obj) {
    answer += Math.floor(obj[key] / 2)
  }
    return answer
  }
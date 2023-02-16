function count (string) {  
    // The function code should be here
    let answer = {}
    for(let i = 0; i<string.length; i++){
      if(!(string[i] in answer)){
        answer[`${string[i]}`] = 1
      }  else {
        answer[`${string[i]}`] = answer[`${string[i]}`] + 1
      }
    }
    return answer
  }
function twoSum(numbers, target) {
    // ...
    let answer = 0
    for(let i = 0; i<numbers.length;i++){
      for(let j = 0; j<numbers.length; j++){
        if(i!==j){
          if(numbers[i] + numbers[j] === target){
            console.log(j,i)
            answer = [j,i]
            return answer
          }
        }
      }
    }
  }
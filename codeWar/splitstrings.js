function solution(str){
    let num1 = 0
    let num2 = 2
    let answer = []
    for(let i = 0; i<Math.ceil(str.length/2); i++){
      let lol = str.slice(num1,num2)
      lol.length === 1 ? lol+='_' : lol
      answer.push(lol)
      num1+=2
      num2+=2
    }
     return answer
  }
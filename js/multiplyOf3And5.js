function solution(number){
    let arr = []
    for(let i = 0; i < number; i++){
      arr.push(i)
    }
  return arr.filter(x => {return (x % 3 === 0) || (x % 5 === 0) ? x : 0}).reduce((a,b) => {return a+b},0)
  }
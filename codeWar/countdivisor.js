function getDivisorsCnt(n){
    // todo
  let answer = 0
  for(let i = 1; i<=Math.sqrt(n); i++){
    n%i === 0 ? answer+=2 : null
    i === n/i ? answer-- : null
  }
return answer
  
}
getDivisorsCnt(1000)
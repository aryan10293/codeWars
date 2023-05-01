function getSum(a, b){
   //Good luck!
  const num = [a,b].sort((a,b) => a-b)
  let answer = 0
  for(let i = num[0]; i<=num[1]; i++){
    answer += i
  }
  return answer
}
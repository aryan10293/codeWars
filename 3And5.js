function solution(number){
  if(number<=0) return 0
  let arr = 0
  for(let i = 1; i<number; i++){
    if(i % 5 === 0 || i % 3 === 0) arr+=i
  }
  return arr
}
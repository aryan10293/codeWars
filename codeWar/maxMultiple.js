function maxMultiple(divisor, bound){
  //your code here
  for(let i = bound; i>divisor; i--){
    if(Number.isInteger(i/divisor)) return i
  }
}
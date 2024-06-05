function reverseNumber(n) {
  n = n.toString().split('').reverse()
  if(n[n.length - 1] === '-'){
    n.pop()
    n = Number(n.join(''))
    n = n-n*2
    return n
  }
  
  return Math.abs(n.join(''))
}
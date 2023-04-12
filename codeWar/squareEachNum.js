function squareDigits(num){
  return Number(`${num}`.split('').map(x => Number(x) * Number(x)).join(''))
}
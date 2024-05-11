function sumDigits(number) {
  let count = 0
  let lol = '123456789'
  number = number.toString()
  for(let i in number){
    
    if(number[i] === '0') continue
    if(!lol.includes(number[i])) continue
    count+=parseInt(number[i])
  }
  return count
}
sumDigits(99)
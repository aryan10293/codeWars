function createPhoneNumber(numbers){
  let num = '('
  for(let i = 0; i<numbers.length;i++){
    if(i <= 2) num+=numbers[i]
    if(i === 2) num+=') '
    if(i>2 && i<=5) num+=numbers[i]
    if(i === 5) num+='-'
    if(i>5) num+=numbers[i]
  }
  return num
}
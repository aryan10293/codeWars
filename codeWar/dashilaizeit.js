
function dashatize(num) {
  //get 'em
  if(num === 1){
    return `${num}`
  }
  num = `${num}`
  let answer = ''
  let theReal = ''
  try{
    for(let i = 0; i<num.length; i++){
    let cool = Number(num[i]) % 2 === 1
    if(num[i] === '-'){
      answer+=num[i+1]
      i++
    } else if(cool && i !== 0 && i !== num.length - 1){
      answer+='-'
      answer+=num[i]
      answer+='-'
    } else if(i === 0 && cool){
      answer+=num[i]
      answer+='-'
    } else if(cool && i === num.length - 1){
      answer+= '-'
      answer+=num[i]
      
    }else {
      answer+=num[i]
    }
  }
  for(let i = 0; i<answer.length; i++){
    if(answer[i] === '-' && answer[i-1] === '-'){
      
    } else {
      theReal+=answer[i]
    }
  }
    console.log(num)
 return theReal
} catch(err){
  console.log('lol')
  return '1'
}
}
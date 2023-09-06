function spacey(array){
  let answer = []
  for(let i = 0; i<array.length; i++){
    if(i === 0) answer.push(array[i])
    if(i > 0) answer.push(`${answer[i-1]}${array[i]}`)
  }
  return answer
}
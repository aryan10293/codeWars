function checkExam(array1, array2) {
 // good luck
  let answer = 0
  for(let i = 0; i<array1.length; i++){
    if(array2[i] === ''){
      continue
    } else if(array2[i] === array1[i]){
      answer += 4
    } else {
      answer -= 1
    }
  }
  return answer < 0 ? 0 : answer 
}
function openOrSenior(data){
  // ...
  let answer = []
  data.forEach(x =>( x[0] >= 55) && (x[1] > 7) ? answer.push('Senior') : answer.push('Open'))
  return answer
}
function arrayDiff(a, b) {
  let answer = []
  for(let i = 0; i<a.length; i++){
    if(!b.includes(a[i])) answer.push(a[i])
  }
  return answer
}
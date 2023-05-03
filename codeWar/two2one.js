function longest(s1, s2) {
  // your code
  let answer = []
  s1.split('').forEach(x => { !answer.includes(x) ? answer.push(x) : null})
  s2.split('').forEach(x => { !answer.includes(x) ? answer.push(x) : null})
  return answer.sort().join('')
}
function twoSort(s) {
  let lol= s.sort()[0].split()[0]
  let answer = ''
  for(let i = 0; i< lol.length; i++){
    i === lol.length - 1 ? answer+= `${lol[i]}` : answer+= `${lol[i]}***`
  }
  return answer
}
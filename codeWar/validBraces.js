function validBraces(braces){
  //TODO 
  let lol = []
  let str = '() {} []'
  for(let i in braces){
    let yay = lol[lol.length - 1] + braces[i]
    str.includes(yay) ? lol.pop() : lol.push(braces[i])
  }
  
  return lol.length === 0
}
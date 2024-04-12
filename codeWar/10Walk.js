function isValidWalk(walk) {
  //insert brilliant code here
  if(walk.length !== 10) return false
  let vert = 0
  let hor = 0
  for(let i in walk){
    if(walk[i] === 'n') vert++
    if(walk[i] === 's') vert--
    if(walk[i] === 'e') hor++
    if(walk[i] === 'w') hor--
  }
  return vert === 0 && hor === 0 ? true : false
}
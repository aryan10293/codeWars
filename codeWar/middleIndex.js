function gimme (triplet) {
  let lol = Math.min(...triplet)
  let lmao = Math.max(...triplet)
  let answer = 0
  triplet.forEach((x,i) => {
    if(x !== lol && x !== lmao){
      answer = i
    }
  })
  return answer
}
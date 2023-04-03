function longestConsec(star, k) {
    // your code
  if(k > star.length || k <= 0) return ''
  let arr = []
  for(let i = 0; i<star.length;i++){
    arr.push(star.slice(i,k).join(''))
    k++
  }
  return arr.sort((a,b) => {return b.length-a.length})[0]
}
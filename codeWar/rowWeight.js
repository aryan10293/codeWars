function rowWeights(array){
  //your code here
  const even = array.filter((x,i) => i%2 === 0 ? x : null).reduce((a,b) => {return a + b},0)
   let odd = array.filter((x,i) => i%2 === 1 ? x : null).reduce((a,b) => {return a + b},0)
  return [even,odd]
}
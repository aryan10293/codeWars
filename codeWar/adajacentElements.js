function adjacentElementsProduct(array) {
  let num = -Infinity 
  for(let i = 1;i<array.length; i++){
    let cool = array[i-1] * array[i]
    cool > num ? num = cool : null
  }
  return num
}
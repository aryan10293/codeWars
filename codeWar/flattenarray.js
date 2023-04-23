function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let arr = []
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        arr.push(array[i][j])
    }
  }
  return arr.sort((a,b) => a-b)
}
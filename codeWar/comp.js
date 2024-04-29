function comp(array1, array2){
  //your code here
  if(array1 === null || array2 === null) return false
  array1 = array1.sort((a,b) => a-b)
  array2 = array2.sort((a,b) => a-b)
  for(let i in array1){
    if(array1[i] * array1[i] !== array2[i]) return false
  }
  return true
}
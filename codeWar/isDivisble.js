function isDivisible(){
  //Write your code here
  const theKeysINeed = Object.values(arguments).map(x => Number(x))
  const theMainNumber = theKeysINeed[0]
  for(let i = 1; i<theKeysINeed.length; i++){
    if(!Number.isInteger(theMainNumber / theKeysINeed[i])) return false
  }
  return true
}
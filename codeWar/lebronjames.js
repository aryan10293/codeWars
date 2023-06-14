function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let obj = {}
    for(let i = 0; i<arguments.length; i++){
        const char = arguments[i]
        obj[char] = obj[char] + 1 || 1
    }
    for(key in obj){
      if(obj[key] !== 1){
        return true
      }
    }
    return false
}
console.log(areThereDuplicates( 'b', 'c', 'a'))
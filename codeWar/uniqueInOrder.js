var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
        let code = [iterable[0]]
        if(typeof iterable === 'string'){
          iterable.split('').forEach((element, index, arr) => {
            let current = arr[index+1]
            let previous = arr[index]
            if(current !== previous){
              code.push(current)
            } 
      })
      console.log(code.pop())
      return code
    } else {
        iterable.forEach((element, index, arr) => {
        let current = arr[index+1]
        let previous = arr[index]
        if(current !== previous){
          code.push(current)
        } 
    })
    console.log(code.pop())
    return code
    }
  }

  var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let arr = []
  for(let i = 0; i<iterable.length; i++){
    if(iterable[i] !== iterable[i-1]) arr.push(iterable[i])
  }
  return arr
}
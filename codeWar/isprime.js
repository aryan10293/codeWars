function isPrime(num) {
    //TODO
    if(num === 1 || num === 0 || num === -1) return false
    if(num === 2 || num === -2) return true
    let arr = []
    arr.push(num)
    for(let i = -5; i<100000; i++){
      if(num % i === 0){
          if(num >=0) arr = arr.filter(x => x>=0)
          if(!arr.includes(i)){
            arr.push(i)
            if(arr.length > 5){
              break
            }
         }
      }
    } 
    return arr.length === 2 ? true : false
  }
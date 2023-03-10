function dontGiveMeFive(start, end){
    let lol = 0
   for(let i = start; i<=end; i++){
     if(!`${i}`.includes('5')) lol++
   }
    return lol
  }
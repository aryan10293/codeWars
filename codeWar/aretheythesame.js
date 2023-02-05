function comp(array1, array2){
    //your code here
    let lol; 
    let cool = 0
    if(array1 === null || array2 === null) return false
    array1 = array1.map(x => x*x).sort((a,b) => a-b)
    array2 = array2.sort((a,b) => a-b)
    array1.length > array2.length ? lol = array1.length : lol = array2.length 
    for(let i = 0; i < lol; i++){
     array1[i] !== array2[i] ?  cool = false : cool++
    }
    return cool === lol
  }
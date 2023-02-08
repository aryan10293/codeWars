function inArray(array1,array2){
    let cool = []
    array1.forEach(x => {
      array2.forEach(b => {
        if(b.includes(x)){
          if(!cool.includes(x))
          cool.push(x)  
        }
      })
    })
   // console.log(array1,array2)
    return cool.sort((a,b) => a.localeCompare(b))
  }
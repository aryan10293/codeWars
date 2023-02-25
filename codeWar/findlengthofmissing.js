function getLengthOfMissingArray(arrayOfArrays) {
    arrayOfArrays = arrayOfArrays || []
    console.log(arrayOfArrays)
      if(arrayOfArrays.length === 0 || arrayOfArrays === null){
        return 0
    }  
      try {
          let lol = arrayOfArrays.sort((a,b) => {return a.length-b.length})
          let cool = lol[0].length
          for(let i = 0; i < lol.length; i++){
              if(lol[i].length === 0){
                  return 0
            } else if(lol[i].length === cool){
                cool++
              } else {
                return cool
            }
          }
      } catch(err){
        return 0
      }
    
    return 0
  }
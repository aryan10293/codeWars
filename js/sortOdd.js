function sortArray(array) {
    // Return a sorted array.
    let i = -1
    let odd = array.filter(x => {if(x%2===1 || x%2 === -1){return x}}).sort((a,b) => a-b)
    let lol = array.map(x => {if(x%2===1 || x%2 === -1){return x=''} else {return x}})
    return lol.map(x => {
      if(x === ''){
          while(i<odd.length){
            i++
            return x=odd[i]
          }
      }  else {
        return x
      }
    })
  }
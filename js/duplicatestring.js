function duplicateEncode(word){
    // ...
      let lol = []
      let code = []
       word.split('').map(x => x.toLowerCase()).forEach((element, index, arr) => {
        let first = arr[index]
        let yay = arr.slice(index + 1)
        if(yay.includes(first)){
          lol.push(first)
          code.push(')')
        } else if(!yay.includes(first)){
          if(lol.includes(first)){
            code.push(')')
          } else {
          code.push("(")
        }
      }
    })
  
  return code.join('')
}
function firstNonRepeatingLetter(s) {
    // Add your code here
    let lol = s.toLowerCase()
    let obj = {}
    for(let i = 0; i<lol.length; i++){
      if(!(lol[i] in obj)){
        obj[`${lol[i]}`] = 1
      } else {
        obj[`${lol[i]}`] = obj[`${lol[i]}`] + 1
      }
    }
    for(const key in obj){
     if(obj[key] === 1){
       if(s.indexOf(key.toUpperCase()) > -1){
         return key.toUpperCase()
       }
       return key
     }
    }
     return ''
  }
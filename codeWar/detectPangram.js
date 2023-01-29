function isPangram(string){
    //...
    string = string.toLowerCase().split('')
    const alpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
    for(let x = 0; x < alpha.length; x++){
      if(string.indexOf(alpha[x]) < 0){
        return false
      }
    }
    return true 
  }
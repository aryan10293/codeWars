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

  function isPangram(string){
  //...
  string = string.toLowerCase()
  let lol = 'qwertyuioplkjhgsazxcvbnm'
  let obj = {}
  for(let i = 0; i<lol.length; i++){
    obj[lol[i]] = false
  }
  
  for(let i in string){
    obj[string[i]] = true
  }
  
  for(let key in obj){
    if(obj[key] === false) return false
  } 
  return true
}
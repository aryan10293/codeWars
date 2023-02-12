function toCamelCase(str){
    const cool = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const we = cool.map(x => x.toLowerCase());
    let lol=''
    for(let i = 0; i<str.length;i++){
      if(!cool.includes(str[i]) && !we.includes(str[i])){
        lol+= str[str.indexOf(str[i + 1])].toUpperCase()
        i++
      } else {
        lol+=str[i]
      }
    }
    return lol
  }
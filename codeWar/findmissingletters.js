function findMissingLetter(array){
    let we = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    if(array[0] === array[0].toLowerCase()) we = we.map(x => x.toLowerCase())
    let cool = we.indexOf(array[0])
    let yay = we.indexOf(array[array.length - 1]) + 1
    let lol = we.slice(cool,yay)
    for(let i = 0; i<lol.length;i++){
      if(!array.includes(lol[i])){
        return lol[i]
      }
     } 
  }
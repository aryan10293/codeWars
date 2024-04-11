function alphabetPosition(text) {
  let str = ''
  text = text.toLowerCase()
  let letter = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i<text.length;i++){
    if(letter.indexOf(text[i]) !== -1){
      str += letter.indexOf(text[i])+1 
    } else {
      continue
    }
     str += ' '
    
  }
  return str.trim();
}
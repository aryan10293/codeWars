function duplicateEncode(word){
    // ...
  let obj = {}
  let str = ''
  word = word.toLowerCase()
  for(let i = 0; i<word.length; i++){
    if(!obj[word[i]]){
      obj[word[i]] = 1
    } else{
      obj[word[i]] = obj[word[i]] + 1
    }
  }
  for(let i = 0; i<word.length; i++){
    if(obj[word[i]] === 1){
      str += '('
    } else {
      str += ')'
    }
  }
  return str
}
duplicateEncode("(( @")
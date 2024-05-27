function wordsToMarks(string){
  //your code here
  let lol = 'abcdefghijklmnopqrstuvwxyz'
  let count = 0
  for(let i in string){
    count+= lol.indexOf(string[i]) + 1
  }
  return count
}
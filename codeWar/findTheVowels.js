function vowelIndices(word){
  //your code here
  const vowels = 'aeiouAEIOUyY'
  const lol = []
  for(let i = 0; i<word.length; i++){
    vowels.includes(word[i]) ? lol.push(i+1) : null
  } 
  return lol
}
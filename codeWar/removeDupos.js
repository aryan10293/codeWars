function removeDuplicateWords (s) {
  // your perfect code...
  const obj = {}
  let answer = ''
  s = s.split(' ')
  for(let i = 0; i<s.length; i++){
    if(!obj[s[i]]){
      answer += `${s[i]} ` 
      obj[s[i]] = 1
    }
  }
  return answer.slice(0,answer.length-1)
}
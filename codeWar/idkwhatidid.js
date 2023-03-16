function accum(s) {
	// your code
  let answer = ''
  for(let i = 0; i<s.length;i++){
      answer+= s[i].toUpperCase()
      answer+= s[i].toLowerCase().repeat(i)
      answer+= '-'
  }
  return answer.slice(0,answer.length-1)
}
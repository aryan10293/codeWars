var capitals = function (word) {
	// Write your code here
  let answer = []
    for(let i = 0; i<word.length; i++){
      if(word[i]===word[i].toUpperCase()) answer.push(i)
    }
  return answer
};
var capitals = function (word) {
	// Write your code here
  let lol = []
  word.split('').forEach((x, i) => x!==x.toLowerCase() ? lol.push(i) : null)
  return lol
};
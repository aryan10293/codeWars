function sumOfMinimums(arr) {
  // your code here
  let answer = 0
  arr.forEach(x => {answer += Math.min(...x)})
  return answer
}
function largestPairSum (numbers) {
  //TODO: Write your Code here
  numbers = numbers.sort((a,b) => {return b-a})
  return numbers[0] + numbers[1]
  
}
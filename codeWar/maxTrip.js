function maxTriSum(numbers){
  //your code here
  numbers = [...new Set(numbers.sort((a,b) => {return b-a}))]
  return numbers[0] + numbers[1] + numbers[2]
}
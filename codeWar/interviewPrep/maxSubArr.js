function maxSubarraySum(arr,num){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length < num) return null
  let start = 1
  let end = num + 1
  let total = arr.slice(0,num).reduce((a,b) => {return (a+b)}, 0)
  for(let i = 0; i < arr.length; i++){
    total = Math.max(total, arr.slice(start,end).reduce((a,b) => {return (a+b)}, 0))
    start++
    end++
  }
  return total
}
console.log(maxSubarraySum([2,3], 3))
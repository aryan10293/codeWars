function capitalizeWords (arr) {
  let answer = []
  function helper(arr){
      if(arr.length === 0 ) return
      answer.push(arr[0].toUpperCase())
      helper(arr.slice(1))
  }
  helper(arr)
  return answer
  // add whatever parameters you deem necessary - good luck!
}
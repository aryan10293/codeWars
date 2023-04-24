function consecutive(arr) {
//code me
  let answer = 0
  arr = arr.sort((a,b) => a-b)
  for(let i = 0; i+1 < arr.length; i++){
    if(arr[i] + 1 !== arr[i+1]){
      answer += arr[i+1] - arr[i] - 1
    }
  }
  
  return answer
}
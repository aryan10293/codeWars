function binarySearch(arr,value){
  // add whatever parameters you deem necessary - good luck!
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left+right)/2)
  let answer = -1
  while(left<=right){
      console.log(arr[middle],arr,value)
     if(arr[middle] === value) {
         answer = middle
         break
     } else if(arr[middle]> value){
         right = middle - 1
     } else {
         left = middle + 1
     }
     middle = Math.floor((left+right)/2)
  }
  return answer
}
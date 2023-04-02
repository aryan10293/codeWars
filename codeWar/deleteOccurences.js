function deleteNth(arr,n){
    // ...
    let obj = {}
    let answer = []
   for(let i = 0; i<arr.length; i++){
      if(!(arr[i] in obj)){
        obj[arr[i]] = 1
        answer.push(arr[i])
      } else if (obj[arr[i]] < n){
        obj[arr[i]] = obj[arr[i]] + 1
        answer.push(arr[i])
      }
    }
    return answer
  }
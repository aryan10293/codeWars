function someRecursive(arr, isOdd){
    let bool;
    function idk(arr){
        if(arr.length === 0){
          bool = false
          return
        } 
        if(isOdd(arr[0])){
            bool = true
            return
        } else {
            idk(arr.slice(1))
        }
    }
    idk(arr)
    return bool
  // add whatever parameters you deem necessary - good luck!
}
function capitalizeFirst (arr) {
    let answer = []
    function helper(arr){
        if(arr.length === 0) return
        answer.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
        helper(arr.slice(1))
    }
    helper(arr)
    return answer
  // add whatever parameters you deem necessary - good luck!
}
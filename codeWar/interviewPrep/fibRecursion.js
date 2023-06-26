function fib(num){
    let arr = [1,1]
    function idk(){
        if(arr.length === num) return 
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        idk()
    }
    idk()
    return arr[arr.length - 1]
  // add whatever parameters you deem necessary - good luck!  
}
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
    // create a array with the first two values 
    // i think ill need a count varvile for something to check to end my recursion funtion
    //create a recursion function
    // inside the fuction ill check if varialbe if the same amoount as the n value is it is return the function 
    // if it isnt add the last two elemesnt of the array togehter and push that number to the end of the array 
    // when the function is return and over 

    // return the last elment in the array
    let arr = [1,1]
    let count = 0
    function helper(){
        if (count + 1 >= n){
            return
        }

        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        count++
        helper()
    }
    helper()
    return n === 0 ? n : arr[count]
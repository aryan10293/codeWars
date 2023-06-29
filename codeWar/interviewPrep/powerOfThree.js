var isPowerOfThree = function(n) {
    let total = 1
    let result;
    function helper(){
        if (total>n){
            result = false
            return
        } else if(total === n){
            result = true
            return
        } else {
            total*=3
            helper()
        }
    }
    helper()
    return result
}
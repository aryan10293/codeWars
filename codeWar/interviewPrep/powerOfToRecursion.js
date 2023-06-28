var isPowerOfTwo = function(n) {
    // create a boolean varible to return
    // creat a total varible
    //create a help funxction
    // if the total ever exceeds the n value set the boolean carible to false and return function
    // if the total varible ever === the n parameter set booleaqn varible to true and return function 
    // else times total by the poer of 2
    let result;
    let total = 1
    function helper(){
        if(total>n){
            result = false
            return
        } else if(total === n){
            result = true 
            return
        } else {
            total*=2
            helper()
        }
    }
    helper()
    return result
}
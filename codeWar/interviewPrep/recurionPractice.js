var myPow = function(x, n) {
    let num = n
    let total = x
    let condi = false
    function idk(num){
        if(num>0){
            if(num === 1){
                return 
            } else {
                total*=x
            }
            num--
            idk(num)
        } else {
            condi = true
            idk(Math.abs(num))
        }
    }
    idk(n)
   return condi ? 1/total : total
};
console.log(myPow(2,-2))
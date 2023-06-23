var myPow = function(x, n) {
    let num = n
    let total = x
    let condi = false
    if(n < 0){
        condi = true
        n = Math.abs(n)
    } else if (n === 0){
        return 1
    } else if(Math.abs(x) === 1){
        return x
    }
    for(let i = 0; i<n-1; i++){
        total*=x
    }
    console.log(total)
   return condi ? 1/total : total
};
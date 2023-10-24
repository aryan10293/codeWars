var trailingZeroes = function(n) {
    let result = 0
    while(n>0){
        n = n / 5
        result += n
    }
    return Math.floor(result)
};
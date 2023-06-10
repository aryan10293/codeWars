var climbStairs = function(n) {
    if(n <= 3) return n
    let pre = 2
    let current = 3
    let nextStep = 0
    for(let i = 4; i<=n; i++){
        nextStep = pre + current
        pre = current
        current = nextStep 
    }
    return nextStep
};
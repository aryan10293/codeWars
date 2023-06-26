function power(base,ex){
    if(ex === 0) return 1
    let count = 1
    let total = base
    function powerOf(count){
        if(count === ex) return 
        count++
        total *= base
        powerOf(count)
    }
    powerOf(count)
    return total
}
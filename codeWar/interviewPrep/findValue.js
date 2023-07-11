var finalValueAfterOperations = function(operations) {
    let x = 0
    operations.forEach(ele => {
        if( ele === '++X' || ele === 'X++'){
            x++
        } else {
            x--
        }
    })
    return x
}
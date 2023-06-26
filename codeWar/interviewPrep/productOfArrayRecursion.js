function productOfArray(arr){
    if(arr.length === 0) return 0
    let total = 1
    function pro(array){
        if(array.length == 0) return 
        total *= array[0]
        pro(array.slice(1))
    }
    pro(arr)
    return total
}
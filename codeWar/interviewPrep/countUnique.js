function countUniqueValues(arr){
    let count = 0
    let obj = {}
    for( num in arr){
        obj[arr[num]] = obj[arr[num]] + 1 || 1
    }
    return Object.keys(obj).length
}


countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
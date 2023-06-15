function minSubArr(arr,num){
    let total = 0
    let minLen = arr.length
    let start = 0
    let end = 1
    // we want to loop through the array
    // we want to slice the array
    while(end !== arr.length){
        const cool = arr.slice(start,end).reduce((a,b) => {return a+b}, 0)
        if(cool >= num && arr.slice(start,end).length < minLen){
            minLen = arr.slice(start,end).length
            start++
        } else if(cool < num) {
            end++
        } else if(cool > num){
            start++
        }
        console.log('start', start)
        console.log('end', end)
        console.log('min Length', minLen)
    }
    if(minLen === arr.length){
        return 0
    } else {
        return minLen
    }
    console.log(arr.slice(start,end))
}
function minSubArrayLen(arr,num){
    let left = 0
    let total = 0
    let minLen = arr.length 
    for(let i = 0; i<arr.length; i++){
        total += arr[i]
        while(total>=num){
            minLen = Math.min(minLen, i+1 - left)
            total-=arr[left]
            left++
        }
    }
    return minLen !== arr.length ? minLen : 0
}
console.log(minSubArrayLen([2,3,1,2,4,3], 7))
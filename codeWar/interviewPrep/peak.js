var peakIndexInMountainArray = function(arr) {
    let peak = 0
    let highest = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i]
            peak = i
        }
    }
    return peak
};
var intersect = function(nums1, nums2) {
    let obj1 = {}
    let answer = []
    let longest;
    let shortest;
    if(nums1.length >= nums2.length){
        longest = nums1
        shortest = nums2
    } else {
        shortest = nums1
        longest = nums2
    }
    for(let i = 0; i<longest.length; i++){
        obj1[longest[i]] = obj1[longest[i]] + 1 || 1
    }
    for(let i = 0; i<shortest.length; i++){
        if(obj1[shortest[i]] !== undefined){
           obj1[shortest[i]] = obj1[shortest[i]] - 1 
           obj1[shortest[i]] === 0 ? delete obj1[shortest[i]] : null
           answer.push(shortest[i])
        }
    }
    return answer
}
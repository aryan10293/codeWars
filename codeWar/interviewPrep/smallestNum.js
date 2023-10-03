var minNumber = function(nums1, nums2) {
    let smallestNum = Infinity
    for(let i = 0; i<nums1.length; i++){
        for(let j = 0; j<nums2.length; j++){
            if(nums1[i] === nums2[j]){
                smallestNum = Math.min(nums1[i], smallestNum)
            } else {
                smallestNum = Math.min(Number(`${nums1[i]}${nums2[j]}`), smallestNum, Number(`${nums2[j]}${nums1[i]}`))
            }
        }
    }
    return smallestNum
};
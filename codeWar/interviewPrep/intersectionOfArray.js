var intersection = function(nums1, nums2) {
    let answer = []
    let longest = nums1.length >= nums2.length ? nums1 : nums2
    let shortest = nums1.length >= nums2.length ? nums2 : nums1
        for(let i = 0; i<shortest.length; i++){
            if(longest.includes(shortest[i])){
                answer.push(shortest[i])
            }
        }
    return [...new Set(answer)];
};
var merge = function(nums1, m, nums2, n) {
    let nums1Index = 0
    let nums2Index = 0
    while( nums1Index < n+m){
        if(nums1[nums1Index] >= nums2[nums2Index]){
            //array.splice(index, 0, elementToAdd);
            nums1.splice(nums1Index, 0, nums2[nums2Index])
            nums2Index++
            nums1Index+=2
        } if(nums1Index > m){
            nums1.splice(nums1Index, 0, nums2[nums2Index])
            nums2Index++
            nums1Index++
        }  else {
            nums1Index++
        }
    }
    nums1.splice(m+n)
    console.log(nums1)
};

/// the abopve solutions isnot optimal and wontpass alot of test cases
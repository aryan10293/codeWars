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

var merge = function(nums1, m, nums2, n) {
    let index = 0
    let index2 = 0
    for(let i = 0; i<m+n; i++){
        console.log('thid is running')
        if(nums1[i] >= nums2[index2]){
            nums1.splice(i, 0, nums2[index2])
            index2++
            nums1.pop()
        }
        if(nums1[i] === 0 && (nums1[i-1] > 0 || nums1[i] === 0)){
            nums1[i] = nums2[index2]
            index2++
        }
    }
    console.log(nums1)
};

/// the abopve solutions isnot optimal and wontpass alot of test cases

var merge = function(nums1, m, nums2, n) {
    let first = m-1
    let second = n-1

    for(let i = m+n-1; i>=0; i--){
        if(second < 0) break
        if(nums1[first] > nums2[second]){
            nums1[i] = nums1[first]
            first--
        } else {
            nums1[i] = nums2[second]
            second--
        }
    }
};
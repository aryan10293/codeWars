var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => {return a-b},0)[nums.length - k]
};
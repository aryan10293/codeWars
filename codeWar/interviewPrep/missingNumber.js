var missingNumber = function(nums) {
    // [0,1,3] missing number is 2
    nums = nums.sort()
    for(let i = 0; i <= nums[nums.length - 1]; i++){
        if(nums[i] !== i){
            return i
        }
    }
    return nums[nums.length - 1] + 1
    
};
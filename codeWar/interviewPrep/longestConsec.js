var longestConsecutive = function(nums) {
    nums = nums.sort((a,b) => a-b)
    nums = [...new Set(nums)];
    if(nums.length === 0) return 0
    let count = 1
    let max = 1
    for(let i = 0; i<nums.length; i++){
        if(nums[i] + 1 === nums[i+1]){
            count++
            max = Math.max(count, max)
        } else {
            count = 1
        }
    }
    return max
};
var longestConsecutive = function(nums) {
    nums = nums.sort((a,b) => a-b)
    nums = [...new Set(nums)];
    let maxLength = 0
    let count = 0
    for(let i = 0; i<nums.length; i++){
        if( nums[i] + 1 === nums[i+1]){
            count++
            maxLength = Math.max(count, maxLength)
        } else {
            console.log(nums[i])
            count++
            maxLength = Math.max(count, maxLength)
            count = 0
        }
    }

    return maxLength
};
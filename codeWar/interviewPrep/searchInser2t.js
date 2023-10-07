var searchInsert = function(nums, target) {
    if(nums.indexOf(target) !== -1){
        return nums.indexOf(target)
    } else{
        for(let i = 0; i<=nums.length; i++){
            if(nums[i]> target){
                return i
            }
            if(i === nums.length){
                return nums.length
            }
        }
    }
};
var containsDuplicate = function(nums) {
    nums = nums.sort()
    // make a array
    // loop throught the nums array 
    // if the current element isnt in the array add it to the array
    // if it is in the array return true
    // if the loop is over and hasnt return true return false 
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === nums[i + 1]){
            return true
        }
    }
    return false
};
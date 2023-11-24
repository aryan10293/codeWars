var removeDuplicates = function(nums) {
    console.log(nums)
    let obj = {}
    let index = 0
    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]] === undefined){
            obj[nums[i]] = 1
            nums[index] = nums[i]
            index++
        } else if(obj[nums[i]] < 2){
            obj[nums[i]] = obj[nums[i]] + 1
            nums[index] = nums[i]
            index++
        }
    }
    return index
};
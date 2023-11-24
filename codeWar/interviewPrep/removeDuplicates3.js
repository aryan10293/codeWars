var removeDuplicates = function(nums) {
    let obj = {}
    let index = 0
    for(let i = 0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
            nums[index] = nums[i]
            index++
        } 
    }
    nums.splice(index)
};

// i think i get thius problem too

var removeDuplicates = function(nums) {
    let obj = {}
    let index = 0
    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]] === undefined){
            obj[nums[i]] = 1
            nums[index] = nums[i]
            index++
        }
    }
    return index
};
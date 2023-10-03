var majorityElement = function(nums) {
    let majority;
    let count = 0
    let obj = {}
    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]]){
           obj[nums[i]] = obj[nums[i]] + 1 
        } else {
            obj[nums[i]] = 1
        }
    }
    for(key in obj){
        if(obj[key] > count){
            count = obj[key]
            majority = Number(key)
        }
    }
    return majority
};
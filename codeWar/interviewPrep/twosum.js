var twoSum = function(nums, target) {
    // make an object
    // loop through nums
    // check if the current numbe adds to the in the object equal target
    // if not then add current num to obj 
    // if it does then add the index to an array
    let obj = {}
    for(let i = 0; i<nums.length; i++){
        let lol = target-nums[i]
        if(obj[lol] !== undefined){
            return [obj[lol] , i]
        } else {
            obj[nums[i]] = i
        }
    }
    //console.log(obj)
}
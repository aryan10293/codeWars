var twoSum = function(nums, target) {
    // create a object to hold number
    // insid the object you want to hold the number and its in dices
    // as you loop through the array check to see if the difference is in the object
    // if the difference is in the object reuturn true 

    // below is gfoign to be a obj that holds the numbers and its indices
    let obj = {}

    for(let i = 0; i<nums.length; i++){
        if(obj[`${target-nums[i]}`]){
            return [i, obj[`${target-nums[i]}`][0]]
        } else {
            obj[nums[i]] = [i , nums[i]]
        }
    }
};
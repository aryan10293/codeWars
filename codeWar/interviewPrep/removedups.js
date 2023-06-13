var removeDuplicates = function(nums) {
    // we want to create a index var and set it equal to 1
        // we set it to 1 because the first elelment in nums will always be unique
    // now we loop through nums and if the current element isnt the same as the next element make the nums[index] = the next element 
    // increment index

    let index = 1
    for(let i = 0; i<nums.length -1; i++){
        if(nums[i] !== nums[i+1]){
            nums[index] = nums[i+1]
            index++
        }
    }
    return index
};
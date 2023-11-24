var removeElement = function(nums, val) {
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i,1)

        }
    }
};

var removeElement = function(nums, val) {
    let index = 0
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[index] = nums[i]
            index++
        }
    }
    return index
};

// i might underatand this question lol
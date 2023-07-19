var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j< nums.length - 1 - i; j++){
            if(nums[j + 1] < nums[j]){
                const temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
    // let swap;
    // for(let i = nums.length ; i>0; i--){
    //    swap = true
    //     for(let j = 0; j<i - 1; j++){
    //         if(nums[j + 1] < nums[j]){
    //             const temp = nums[j]
    //             nums[j] = nums[j + 1]
    //             nums[j + 1] = temp
    //             swap=false
    //         }
    //     }
    //     if(swap) break
    // }
    // return nums
};
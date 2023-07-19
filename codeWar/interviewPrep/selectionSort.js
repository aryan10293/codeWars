var sortArray = function(nums) {


    for(let i = 0; i<nums.length;i++){
        let min = nums[i]
        let index
        let swap = false
        for(let j = 1+i; j<nums.length;j++){
            console.log(min,nums[j])
            if(min > nums[j]){
                min = nums[j]
                index = j
                swap = true
            }
        }
            if(swap){
                nums[index] = nums[i]
                nums[i] = min
            } 
    }
    return nums
};
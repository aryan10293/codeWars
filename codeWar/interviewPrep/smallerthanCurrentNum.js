var smallerNumbersThanCurrent = function(nums) {
    let result = []
    for(let i = 0; i<nums.length; i++){
        let countLessThanNum = 0
        for(let j = 0; j<nums.length; j++){
            if(i !== j && nums[i] > nums[j]) countLessThanNum++
        }

        result.push(countLessThanNum)
    }
    return result
};
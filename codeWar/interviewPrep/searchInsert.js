var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let middle = Math.floor((left+right) / 2)
    let answer = -1
    while(left <= right){
        if(nums[middle] === target){
            answer = middle
            break
        } else if (nums[middle] > target){
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.floor((left+right) / 2)
    }
    if (answer === -1){
        return middle + 1
    } else {
        return answer
    }
};
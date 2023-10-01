var maxSubArray = function(nums) {
    // this method is the correct way to run it cause its the fastest
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Choose the maximum between the current element and the sum of the current element
        // with the previous subarray sum
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update the maximum sum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
var maxSubArray = function(nums) {

    let maxSum = nums[0]
    let tempSum = nums[0] ;
    for(let i = 1; i<nums.length; i++){
        if(tempSum + nums[i] > nums[i]){
            tempSum += nums[i]
        } else {
            tempSum = nums[i]
        }
        maxSum = Math.max(tempSum,maxSum)
    }
    return maxSum
};
var maxSubArray = function(nums) {
    let total = nums.reduce((a,b) => {return a+b}, 0)
    let number = nums.length
    // this my original thought, it works but its extremely slow due to the nest for loops 
    // get the total of the original array 
    // loop through array
    // slice array and check each slice if its great than total
    // if it is reassign total
    // once each element is loop[ed through an created a sub array for then return the total
    for(let i = 1; i < number; i++){
        let cool = 0
        for(let j = number - i; j<=number; j++){
            let subTotal = nums.slice(cool, j).reduce((a,b) => {return a+b}, 0)
             if(subTotal>total) total = subTotal
            cool+=1
        }
    }
    return total
};
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currentSum = nums[0]
    for(let i = 1; i<nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
};
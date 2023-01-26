/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let first = 0
    let second = 0
    nums.forEach((element,index,arr) => {
        arr.forEach((ele,number,array) => {
            if((arr[index] + array[number] === target) && (index !== number)){
                second = number
                first = index
            }
        })
    })
    let indexes = [second,first]
    return indexes
};
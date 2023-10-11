var summaryRanges = function(nums) {
    let answer = []
    let count = nums[0]
    let string = `${nums[0]}`
    if(nums.length === 1) return [string]
    for(let i = 1; i<nums.length; i++){
        if(nums[i] === count+1){
            string += `${nums[i]}`
            count = nums[i]
        } else {
            if(string.length === 1){
                answer.push(`${string[0]}`)
            } else {
                answer.push(`${string[0]}->${string[string.length - 1]}`)
            }
            string = `${nums[i]}`
            count = nums[i]
        }
        if(nums.length - 1 === i && string.length >= 1){
            if(string.length === 1){
                answer.push(`${string[0]}`)
            } else {
                answer.push(`${string[0]}->${string[string.length - 1]}`)
            }
        }
    }
    return answer
};
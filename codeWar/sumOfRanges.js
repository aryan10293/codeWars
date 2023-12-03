var summaryRanges = function(nums) {
    let answer = []
    let string = [nums[0]]
    if(nums.length === 1) return [`${string[0]}`]
    for(let i = 0; i<nums.length; i++){
        if(nums[i] + 1 === nums[i+1]){
            string.push(nums[i+1])
        } else {
            answer.push(string.length === 1 ? `${string[0]}` : `${string[0]}->${string[string.length - 1]}`);
            string = [nums[i+1]]
        }
    }
    return answer
};
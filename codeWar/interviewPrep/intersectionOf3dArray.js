var intersection = function(nums) {
    let answer = []
    nums = nums.sort((a,b) => {
        return b.length-a.length
    }, 0)
    let first = nums.pop()
    for(let i = 0; i<first.length; i++){
        let count = 0
        for(let j = 0; j<nums.length; j++){
            if(!nums[j].includes(first[i])){
                break
            } else {
                count++
            }
        }
        if(count === nums.length){
            answer.push(first[i])
        }
    }
    return answer.sort((a,b) => {return a-b})
};
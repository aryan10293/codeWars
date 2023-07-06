var majorityElement = function(nums) {
    let total = 0
    let answer;
    let obj = {}
    nums.forEach(x => {
        obj[`${x}`] = obj[`${x}`] + 1 || 1
    })
    for(let lol in obj){
        if(obj[lol] > total){
            total = obj[lol]
            answer = lol
        }
    }
    return answer
};
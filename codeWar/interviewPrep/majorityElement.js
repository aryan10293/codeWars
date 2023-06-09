var majorityElement = function(nums) {
    let total = 0
    let answer;
    let obj = {}
    nums.forEach(x => {
        obj[`${x}`] = obj[`${x}`] + 1 || 1
    })
    for(let key in obj){
        if(obj[key] > total){
            total = obj[key]
            answer = key
        }
    }
    return answer
};
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

// def get this problem

var majorityElement = function(nums) {
    let obj = {}
    let count = [0,0]
    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]] === undefined){
            obj[nums[i]] = 1
        } else {
            obj[nums[i]] = obj[nums[i]] + 1
        }
    }
    for(let key in obj) {
        if(obj[key] > count[0]){
            count = [obj[key], key]
        }
    }
    return count[1]
};
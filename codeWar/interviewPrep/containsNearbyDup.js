var containsNearbyDuplicate = function(nums, k) {
    let obj = {}
    for(let i = 0; i<nums.length; i++){
        if(nums[i] in obj){
            obj[nums[i]].push(i) 
        } else {
           obj[nums[i]] = [i]
        }
    }
    for(let w in obj){
        if(obj[w].length > 1){
            for(let i = 0; i<obj[w].length; i++){
                if(obj[w][i+1] - obj[w][i] <= k) return true
            }
        }
    }
    return false
};

// solution is slow but i get the problem  if asked to optimized id be cooked

var containsNearbyDuplicate = function(nums, k) {
    let obj = {}
    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]]){
           obj[nums[i]].push(i) 
        } else {
            obj[nums[i]] = [i]
        }
    }
    obj = Object.values(obj).filter(x => x.length > 1)
    for(let i = 0; i<obj.length; i++){
        for(let j = 0; j<obj[i].length; j++){
            if(Math.abs(obj[i][j] - obj[i][j + 1]) <= k) return true

        }
    }
    return false
};
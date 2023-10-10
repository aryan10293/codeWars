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
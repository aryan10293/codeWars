var groupAnagrams = function(strs) {
    if(strs.length === 1) return [[strs[0]]]
    let obj = {}
    let sorted = strs.map(x => x.split('').sort().join(''))
    for(let i = 0; i<sorted.length; i++){
        if(obj[sorted[i]]){
          obj[sorted[i]].push(strs[i])  
        } else {
          obj[sorted[i]] = [strs[i]]  
        }
    }
    return Object.values(obj)
};
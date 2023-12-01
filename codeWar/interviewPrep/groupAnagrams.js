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

// this is a easy one nopw 

var groupAnagrams = function(strs) {
    let lmao = strs.map(x => x.split('').sort().join(''))
    let obj = {}
    for(let i = 0; i<lmao.length; i++){
        if(!obj[lmao[i]]){
            obj[lmao[i]] = [strs[i]]
        } else {
            obj[lmao[i]].push(strs[i])
        }
    }
    return Object.values(obj)
};
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let obj = {}
    for(let i = 0; i<s.length; i++){
        if(obj[s[i]]){
           obj[s[i]] = obj[s[i]] + 1 
        } else {
            obj[s[i]] = 1
        }
    }
    for(let i = 0; i<t.length; i++){
        if(obj[t[i]]){
           obj[t[i]] = obj[t[i]] - 1
           if(obj[t[i]] === 0) delete obj[t[i]] 
        } else {
            return false
        }
    }
    return true
};

// this one aint that bad 

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let obj = {}
    for(let i = 0; i<s.length; i++){
        if(!obj[s[i]]){
           obj[s[i]] = 1 
        } else {
            obj[s[i]] = obj[s[i]] + 1
        }
    }
    for(let i = 0; i<t.length; i++){
        if(!obj[t[i]]){
            return false
        } else {
           obj[t[i]] = obj[t[i]] - 1 
           if(obj[t[i]]===0) delete obj[t[i]]
        }
    }
    return true
};
var isSubsequence = function(s, t) {
    let index = 0
    let tIndex = 0
    if(s === '') return true
    while(tIndex<t.length){
        if(s[index] === t[tIndex]){
            index++
            if(s[index] === undefined) return index
        }
        tIndex++
    }
    return false
};

// thius one is easy kinda

var isSubsequence = function(s, t) {
    let sIndex = 0
    let tIndex = 0
    if(s === '') return true
    while(tIndex<t.length){
        if(s[sIndex] === t[tIndex]){
            sIndex++
            if(s[sIndex] === undefined) return true
        }
        tIndex++
    }
    return false
};
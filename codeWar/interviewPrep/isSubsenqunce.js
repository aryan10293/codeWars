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
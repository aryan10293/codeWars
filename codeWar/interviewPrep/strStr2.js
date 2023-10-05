var strStr = function(haystack, needle) {
    let ending = needle.length
    for(let i = 0; i<haystack.length; i++){
        if(haystack.substring(i, ending) === needle) return i
        ending++
    }
    return -1
    //return haystack.indexOf(needle)
};
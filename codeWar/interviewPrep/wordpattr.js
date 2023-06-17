var wordPattern = function(pattern, s) {
    pattern = pattern.split('')
    let count = 0
    s = s.split(' ')
    if(s.length !== pattern.length) return false
    let obj = {}
    for(let i = 0; i<pattern.length; i++){
        // console.log(obj[pattern[i]] !== s[i])
        if(obj[pattern[i]] !== s[i]) count++
        if(obj[pattern[i]] !== undefined){
            if(obj[pattern[i]] !== s[i]) return false
        }else{
            console.log(pattern[i], s[i], Object.keys(obj))
            if(Object.values(obj).includes(s[i])) return false 
            obj[pattern[i]] = s[i]
        }
    }
    return true
};
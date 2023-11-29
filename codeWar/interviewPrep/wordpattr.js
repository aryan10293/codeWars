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

// i have no idea what i was doing above and i didnt understand months after below is my new trash code

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let pObj = {}
    let sObj = {}
    s = s.split(' ')
    if(pattern.split('').length !== s.length) return false
    for(let i = 0; i<pattern.length; i++){
        if(!pObj[pattern[i]]){
           pObj[pattern[i]] = [i] 
        } else {
            pObj[pattern[i]].push(i)
        }
    }
    for(let i = 0; i<s.length; i++){
        if(!sObj[s[i]]){
           sObj[s[i]] = [i] 
        } else {
            sObj[s[i]].push(i)
        }
    }
    pObj = Object.values(pObj)
    sObj = Object.values(sObj)
    console.log(pObj, sObj)
    if(pObj.length !== sObj.length) return false
    for (let i = 0; i < pObj.length; i++) {
        for (let j = 0; j < pObj[i].length; j++) {
            // Compare values at the same position
            if (pObj[i][j] !== sObj[i][j]) {
                return false
            }
        }
    }
    return true
};
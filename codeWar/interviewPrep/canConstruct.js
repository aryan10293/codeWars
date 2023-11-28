var canConstruct = function(ransomNote, magazine) {
    let obj = {}
    let index = 0
    for(let i = 0; i<magazine.length; i++){
        if(obj[magazine[i]]){
            obj[magazine[i]] = obj[magazine[i]] + 1
        } else {
            obj[magazine[i]] = 1
        }
    }
    while (index < ransomNote.length){
        if(obj[ransomNote[index]]){
            obj[ransomNote[index]] = obj[ransomNote[index]] - 1
            if(obj[ransomNote[index]] === 0) delete obj[ransomNote[index]]
        } else {
            return false
        }
        index++
    }
    return true
};

// the second time doing this one kinda coooked me 

var canConstruct = function(ransomNote, magazine) {
    let rObj = {}
    let mObj = {}
    let count = 0
    for(let i = 0; i<ransomNote.length; i++){
        if(!rObj[ransomNote[i]]){
            rObj[ransomNote[i]] = 1
        } else {
            rObj[ransomNote[i]] = rObj[ransomNote[i]] + 1
        }
    }

    for(let i = 0; i<magazine.length; i++){
        if(!mObj[magazine[i]]){
            mObj[magazine[i]] = 1
        } else {
            mObj[magazine[i]] = mObj[magazine[i]] + 1
        }
    }

    for (const key in rObj) {
        console.log(rObj, mObj)
        if(rObj[key] <= mObj[key]) count++
    }
    return count === Object.values(rObj).length
};
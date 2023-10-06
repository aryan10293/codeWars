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
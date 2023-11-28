var isIsomorphic = function(s, t) {
    let sStr = {}
    let tStr = {}
    for(let i = 0; i<t.length; i++){
        if(sStr[`a${s[i]}`]){
          sStr[`a${s[i]}`].push(i)  
        } else {
            sStr[`a${s[i]}`] = [i]
        }
        if(tStr[`a${t[i]}`]){
          tStr[`a${t[i]}`].push(i)  
        } else {
            tStr[`a${t[i]}`] = [i]
        }
    }
    sStr = Object.values(sStr)
    tStr = Object.values(tStr)
    for(let i = 0; i<tStr.length; i++){
        for(let j = 0; j<tStr[i].length; j++){
            if(sStr[i] === undefined || tStr[i] === undefined) return false
            if(sStr[i][j] !== tStr[i][j]) return false
        }
    }
    return true 
};

// goota keep working on this one 

var isIsomorphic = function(s, t) {
    let sObj = {}
    let tObj = {}
    for(let i = 0; i<s.length; i++){
        if(!sObj[s[i]]){
            sObj[s[i]] = 1
        } else {
            sObj[s[i]] = sObj[s[i]] + 1
        }
    }
    for(let i = 0; i<t.length; i++){
        if(!tObj[t[i]]){
            tObj[t[i]] = 1
        } else {
            tObj[t[i]] = tObj[t[i]] + 1
        }
    }
    console.log(sObj, tObj)
    sObj = Object.values(sObj)
    tObj = Object.values(tObj)
 
    for(let i = 0; i<sObj.length; i++){
        if(sObj[i] !== tObj[i]) return false
    }
    return true
};
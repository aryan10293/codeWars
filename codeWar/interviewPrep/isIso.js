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
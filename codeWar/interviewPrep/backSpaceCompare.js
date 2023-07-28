var backspaceCompare = function(s, t) {
    let resultS = []
    let resultT = []
    for(let i = 0; i<s.length; i++){
        if(s[i] !== '#'){
            resultS.push(s[i])
        } else {
            resultS.pop()
        }
    }

    for(let i = 0; i<t.length; i++){
        if(t[i] !== '#'){
            resultT.push(t[i])
        } else {
            resultT.pop()
        }
    }

    return resultS.join('') === resultT.join('')
};
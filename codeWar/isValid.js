var isValid = function(s) {
    let answer = []
    let topOfArray = '[ {  ('
    let validBracket = '{} [] ()'

    for(let i = 0; i<s.length; i++){
        if(topOfArray.includes(s[i])){
            answer.push(s[i])
        } else {
            let isValidBracket = `${answer[answer.length - 1]}${s[i]}`
            if(validBracket.includes(isValidBracket)){
                answer.pop()
            } else {
                return false
            }
        }
    }
    return answer.length === 0 


};
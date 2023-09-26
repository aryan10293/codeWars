var isValid = function(s) {
    // 
    let arrayToHoldBrackets = []
    let openingBrackets = "( { ["
    let validBrackets = "() {} []"
    
    for(let i = 0; i<s.length; i++){
        
        if(openingBrackets.includes(s[i])){
            arrayToHoldBrackets.push(s[i])
        } else {
            let topOfArray = arrayToHoldBrackets[arrayToHoldBrackets.length -1]
            // below is me creating a varible to check is the strign is valid
            let idkWhatToCallThis = `${topOfArray}${s[i]}`
            if(validBrackets.includes(idkWhatToCallThis)){
                arrayToHoldBrackets.pop()
            } else {
                return false
            }
        }
        
    }
    return arrayToHoldBrackets.length === 0
};
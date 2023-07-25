var evalRPN = function(tokens) {
    const operations = '+ - / *'
    const tokensStack = []
    for(let i = 0; i<tokens.length; i++){
        tokensStack.push(tokens[i])
        if(operations.includes(tokens[i])){
            tokensStack.pop()
            let firstNumOfEqu = Number(tokensStack[tokensStack.length - 2])
            let secNumOfEqu = Number(tokensStack[tokensStack.length - 1])
            let resultFromEquation;
            if(tokens[i] === '+') resultFromEquation = firstNumOfEqu + secNumOfEqu
            if(tokens[i] === '-') resultFromEquation = firstNumOfEqu - secNumOfEqu
            if(tokens[i] === '/'){
                firstNumOfEqu / secNumOfEqu >= 0 ? resultFromEquation = Math.floor(firstNumOfEqu / secNumOfEqu) : resultFromEquation = Math.ceil(firstNumOfEqu / secNumOfEqu)
            }
            if(tokens[i] === '*') resultFromEquation = firstNumOfEqu * secNumOfEqu
            tokensStack.pop()
            tokensStack.pop()
            tokensStack.push(resultFromEquation)
            // tokenstack 10 6 -132 
        }
    }
    return tokensStack[0]
};
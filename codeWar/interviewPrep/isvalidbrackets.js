var isValid = function(s) {
    let stack = []
    let parens = '() {} []'
    for(let i = 0; i<s.length; i++){
        stack.push(s[i])

        let strParens = stack[stack.length - 2] + stack[stack.length - 1]

        if(parens.includes(strParens)){
            stack.pop()
            stack.pop()
        }
        console.log(stack)
    }
    return stack.length === 0
};
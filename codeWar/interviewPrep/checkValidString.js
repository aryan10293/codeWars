var checkValidString = function(s) {
    let startParens = '( *'
    let endParens = '* )'
    let end = s.length - 1
    let start = 0
    const stack = []
    if(s.length === 1){
        if(s[0] === '(' || s[0] === ')') return false
        if (s[0] === '*') return true
    }
    while(start<end){

        let currentParens = stack[stack.length - 2] + stack[stack.length - 1]
        
        if(!startParens.includes(s[start]) || !endParens.includes(s[end])){
            return false
        }
        start++
        end--
    }
    return true
    //console.log(stack)
};
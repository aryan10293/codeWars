var calPoints = function(operations) {
    let scoreStack = []
    for(let i = 0; i<operations.length; i++){
        if(operations[i] === '+'){
            let lastScore2 = scoreStack[scoreStack.length - 2]
            let lastScore1 = scoreStack[scoreStack.length - 1]
            scoreStack.push(lastScore2 + lastScore1)
        } else if(operations[i] === 'D'){
            scoreStack.push( scoreStack[scoreStack.length - 1] + scoreStack[scoreStack.length - 1])
        } else if(operations[i] === 'C'){
            scoreStack.pop()
        } else {
            scoreStack.push(Number(operations[i]))
        }
    }
    return scoreStack.reduce((a,b) => {return a+b}, 0)
}
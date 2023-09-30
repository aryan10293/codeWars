var generate = function(numRows) {
    let answer = []
    for(let i = 0; i < numRows; i++){
        let newArray = []
        for(let j = 0; j<=i; j++){
            if(j === 0 || j === i ){
                newArray.push(1)
            } else {
                newArray.push(answer[i-1][j-1] + answer[i-1][j])
            } 
        }
        
        answer.push(newArray)
    }
    return answer
};
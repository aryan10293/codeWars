var sortByBits = function(arr) {
    let answer = {}
    let actualAnswer = []
    for(let i = 0; i<arr.length; i++){
        const number = arr[i]
        const bitNumber = number.toString(2)
        let count = 0
        bitNumber.split('').forEach(x => x === '1' ? count++ : null)
        if(answer[count]){
            answer[count].push(number)
        } else {
           answer[count] = [number] 
        }
    }
    for(key in answer){
        actualAnswer.push(...answer[key].sort((a,b) => a-b))
    }
    return actualAnswer
};
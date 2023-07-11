var chunk = function(arr, size) {
    let answer = []
    let num = 0
    let lol = size
    while(arr.length > 0){
        let lmao = arr.splice(0,size)
        answer.push(lmao)
    }
    return answer
};
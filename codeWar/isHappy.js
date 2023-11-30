var isHappy = function(n) {
    let answer = n.toString().split('')
    let lol = {}
    while(answer !== 1){
        answer = answer.map(x => Number(x) * Number(x)).reduce((a, b) => a + b, 0);
        if(lol[answer]){
            return false
        } else {
            lol[answer] = 1
            if(answer == 1) return true
            answer = answer.toString().split('')
        }
    }
};
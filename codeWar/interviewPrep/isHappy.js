var isHappy = function(n) {
    n = n.toString()
    let answer = n
     while (answer !== 1){
        answer = answer.split('').map(x => Number(x) * Number(x)).reduce((a,b)=> {return a+b}, 0)
        console.log(typeof answer, answer)
      return  answer <= 9 && answer !== 1 ? false : null
     }
     return Number(answer) === 1 ? true : false
};


var isHappy = function(n) {
    n = n.toString()
    let answer = n
    let lol = {}
    let index = 0
     while (answer !== 1){
        answer = n.toString().split().map(x => Number(x) * Number(x)).reduce((a,b)=> {return a+b}, 0)
        console.log(index,answer)
        if(lol[answer]){
            console.log(index, 'i stopped here')
            return false
        } else {
            lol[`${answer}`] = answer
        }
        index++
    //   return  answer <= 9 && answer !== 1 ? false : null
     }
     return Number(answer) === 1 ? true : false
};

var isHappy = function(n) {
    let answer = n.toString()
    let lol = {}
     while (answer !== 1){
        answer = answer.toString().split('').map(x => Number(x) * Number(x)).reduce((a,b)=> {return a+b}, 0)
        if(lol[answer]){
            return false
        } else {
            lol[`${answer}`] = answer
        }
     }
     return true
};
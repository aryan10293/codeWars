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
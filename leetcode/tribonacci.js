
var tribonacci = function(n) {
     const answer = []
     let cool = [0,0,1]
   cool.forEach(x => {
   answer.push(x)
 })
 if(n === 0){
     return 0
 }
 for(let i = 1; i<n; i++){
   let yay = cool.reduce((a,b) => {return a+b},0)
   cool.shift()
   cool.push(yay)
   answer.push(yay)
 }
 return answer[answer.length - 1]
};
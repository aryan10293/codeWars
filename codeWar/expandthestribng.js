function expandedForm(num) {
    // Your code here
    num = `${num}`
    let cool = num.length
    let answer = []
    //console.log(cool)
    for(let i = 0; i<cool; i++){
      let yoo;
      if(Number(num[i]) !== 0){
        yoo = `${num[i]}`
        //console.log(num[i], i+1)
        for(let j = 0; j < cool-(i+1); j++){
          yoo+='0'
        }
      }
      answer.push(yoo)
    }
    answer = answer.filter(x => {
      if(x !== undefined){
        return x
      }
    })
    return answer.join(' + ')
    //console.log(cool)
  }
  expandedForm(70304)
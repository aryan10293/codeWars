function countPositivesSumNegatives(input) {
    // your code here
    console.log(input)
   if (!input || input.length === 0){
     return []
   }
    let lol = input.filter(x => {
      if(x > 0 && x !== 0){
          return x
      }
    }).length
      let yay = input.filter(x => {
      if(x < 0 && x !== 0){
          return x
      }
    }).reduce((a,b) => {return a+b}, 0)
  
      return [lol,yay]
  }
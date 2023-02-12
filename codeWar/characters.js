function solve(s){
    //..
     const cool = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
     const we = cool.map(x => x.toLowerCase());
     s = s.split('')
     let upper = 0
     let lower = 0
     let num = 0
     let special = 0
     s.forEach(x => {
       //console.log(`${Number(x) + 2}` === `${NaN}`)
       if (`${Number(x) + 2}` !== `${NaN}`){
         num++
       } else if(x === x.toUpperCase() && cool.includes(x)){
         upper++
       } else if(x === x.toLowerCase() && we.includes(x)) {
         lower++
       } else {
         special ++
       }
     }) 
     console.log(we)
     console.log('$' === '$'.toLowerCase())
     return [upper,lower,num,special]
     //return [upper,lower,num,special]
   }
   solve("Codewars@codewars123.com")
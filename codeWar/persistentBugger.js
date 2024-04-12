function persistence(num) {
    //code me
   let lol = `${num}`.split('').map(x =>  parseInt(x))
   let cool = lol.reduce((a,b) => {return a*b}, 1)
   let loop = 1
   if(lol.length === 1){
     return 0
   }
   for(let i = 0; i<100; i++){
     if(`${cool}`.length > 1){
       cool = `${cool}`.split('').map(x =>  parseInt(x)).reduce((a,b) => {return a*b}, 1)
       loop++
   } else {
       i = 100
       return loop
    }
   }
 }

 function persistence(num) {
   //code me
  let count = 0
  num = num.toString()
  while(num.length > 1){
    let times = 1
    for(i in num){ times = times * Number(num[i])}
    num = times.toString()
    count++
  }
  return count
}
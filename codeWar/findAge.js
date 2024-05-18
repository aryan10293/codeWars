function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  // your code
  let lol = Array.from(arguments).map(x => x*x).reduce((a,b) => {return a+b}, 0)
  return Math.floor(Math.sqrt(lol)/2)
}
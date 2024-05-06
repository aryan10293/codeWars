function solve(s){
    //..
  let up = 0
  let low = 0
  for(let i in s){
    s[i] === s[i].toUpperCase() ? up++ : low++ 
  }
  return low >= up ? s.toLowerCase() : s.toUpperCase()
}
var number = function(busStops){
  let answer = 0
  let cool = 0
  busStops.forEach(a => answer += a[0])
  busStops.forEach(a => cool += a[1])
  return answer - cool
}

var number = function(busStops){
  // Good Luck!
  let total = 0
  for(let i = 0; i<busStops.length; i++){
    total += busStops[i][0]
    total -= busStops[i][1]
  }
  return total
}
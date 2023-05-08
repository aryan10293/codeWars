var number = function(busStops){
  let answer = 0
  let cool = 0
  busStops.forEach(a => answer += a[0])
  busStops.forEach(a => cool += a[1])
  return answer - cool
}
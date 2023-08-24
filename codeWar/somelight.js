var AmIAfraid = function(day, num){
  //Help me...
  if(day === 'Monday' && num === 12) return true
  if(day === 'Sunday' && (num === -666 || num === 666)) return true
  if(day === 'Tuesday' && num > 95) return true
  if(day === 'Wednesday' && num === 34) return true
  if(day === 'Thursday' && num === 0) return true
  if(day === 'Friday' && num%2 === 0) return true
  if(day === 'Saturday' && num === 56) return true
  console.log(num)
  return false
}
function twoOldestAges(ages){
  return [ages.sort((a,b) => a-b)[ages.length - 2], ages.sort((a,b) => a-b)[ages.length - 1]]
}
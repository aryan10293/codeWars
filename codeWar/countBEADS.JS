function countRedBeads(n) {
  //your code here
  if(n<2) return 0
  let count = 0
  for(let i = 1; i<n; i++){
    count+=2
  }
  return count
}
function findOutlier(integers){
  //your code here
  const even = []
  const odd = []
  for(let i =0; i<integers.length;i++){
    integers[i] % 2 === 0 ? even.push(integers[i]) : odd.push(integers[i])
  }
  return even.length === 1 ? even[0] : odd[0]
}
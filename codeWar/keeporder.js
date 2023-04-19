function keepOrder(ary, val) {
  // your code here
  for(let i = 0; i<ary.length; i++){
    if(val <= ary[i]){
      console.log(i)
      return i
    }
  }
  return ary.length
}
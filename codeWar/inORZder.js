function inAscOrder(arr) {
  // Code your algorithm here :)
  
  // Hmmm ... maybe we should try our luck out ...
  // if (Math.random() > 0.5) {
  //  return true;
  // } else {
  //  return false;
  // }
  for(let u = 0; u<arr.length; u++){
    console.log(arr[u], arr[u+1])
    if(arr[u] > arr[u+1]) return false
  }
  return true
}
inAscOrder([1, 6, 10, 18, 2, 4, 20])
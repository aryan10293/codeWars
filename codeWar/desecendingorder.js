function descendingOrder(n){
  //...
  return Number(`${n}`.split('').sort((a,b) => b-a).join(''))
}
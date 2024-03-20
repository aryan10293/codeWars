function rowSumOddNumbers(n) {
	// TODO
  let num = -1
  let arr = []
  for(let i = 1;i<=n; i++ ){
    let cool = []
    for(let j = 0; j<i; j++){
      num+=2
      cool.push(num)
    }
    arr.push(cool)
  }
  return arr[arr.length - 1].reduce((a,b) => {return a+b}, 0)
}
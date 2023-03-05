function pascalsTriangle(n) {
    //return a flat array representing the values of Pascal's Triangle to the n-th level
    let arr = [[1]]
    let num1 = 0
    let num2 = 1
    let tracker = 0
    for(let i = 1; i<n; i++){
      let lol = [1]
      for(let j = 0; j<=i; j++){
        if(j === 0 || j === i){
          lol[j] = 1
        } else {
          lol[j] = arr[arr.length - 1][num1] + arr[arr.length - 1][num2]
          num1++
          num2++
        }
      }
      num1 = 0
      num2 = 1
      arr.push(lol)
    }
    return arr.join(',').split(',').map(x => Number(x)).filter( x => {if(x !== NaN) return x})
  }
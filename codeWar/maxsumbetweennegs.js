function maxSumBetweenTwoNegatives(a) {
  let arr = []
  let num1 = 0
  let num2 = 1
  let answer = 0
  a.forEach((x,i) => {if (x<0) arr.push(i)})
  if(arr.length <= 1) return -1
  console.log(arr,a)
  for(let i = 0; i<arr.length-1; i++){
    let cool = 0
    let lol = a.slice(arr[num1], arr[num2])
    for(let j = 0; j<lol.length; j++){
      if(lol[j] > 0){
        cool+=lol[j]
      }
    }
    if(cool > answer) answer = cool
    num1++
    num2++
  }
  return answer
}
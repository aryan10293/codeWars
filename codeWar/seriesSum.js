function SeriesSum(n)
{
  // Happy Coding ^_^
  let num = 1
  let answer = 0
  for(let i = 1; i <=n; i++){
    let cool = 1 / num
    answer += cool
    num+=3
  }
  return `${answer.toFixed(2)}`
}
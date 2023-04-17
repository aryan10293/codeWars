function dotCalculator (equation) {
  const minus = equation.includes('-')
  const add = equation.includes('+')
  const times = equation.includes('*')
  const num1 = equation.split(' ')[0].length
  const num2 = equation.split(' ')[2].length
  let num = 0
  let answer = ''
	num = minus ? num1 - num2 : add ?  num1 + num2 : times ? num1 * num2 : num1 / num2
 for(let i = 1; i<=num; i++){
   answer+='.'
 }
  return answer
}
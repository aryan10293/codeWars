function revrot(str, sz) {
    // your code
  if(sz<= 0||sz>str.length|| str.trim() === '') console.log('itwors')
  let num = 0
  let num1 = sz
  let arr = []
  let answer = []
  for(let i = 0; i<sz; i++){
    arr.push(str.slice(num,num1))
    num += sz
    num1 += sz
    arr = arr.filter(x => {if(x.length === sz) return x})
  }
  arr.forEach(x => {
   let yay = x.split('').map(x => Math.pow(Number(x),3)).reduce((a,b) => {return Number(a) + Number(b)}, 0)
   if(yay % 2 === 0){
     answer.push(x.split('').reverse().join(''))
   } else {
     x = x.split('')
     x.push(x[0])
     answer.push(x.slice(1).join(''))
   }
  })
  console.log(answer.join('') === "0365065073456944")
}
// The input is a string of integers and a size integer. Split the string into substrings of the specified size, discarding the remaining characters fewer than the size.

// If the size is 0 or less, or is greater than the length of the string, return "".

// Implement an algorithm transforming each substring as follows:

// If the sum of the substring's digits is a multiple of 2, reverse that substring ("123" > "321").
// Otherwise, rotate the substring to the left by one position ("135" > "351")
// Combine the resulting substrings and return the result.
revrot("563000655734469485", 4)
function toCamelCase(str){
  let arr 
  let answer = ''
  let lol = str.split('').map(x => {
    if(x === '-' || x === '_' ){
      return ' '
    } else {
      return x
    }
  })
  arr = lol.join('').split(' ')
  for(let i = 0; i<arr.length; i++){
    if (i === 0){
      answer+= arr[i]
    } else {
      answer += `${arr[i][0].toUpperCase()}${arr[i].slice(1)}`
      
    }
    
  }
  return answer
}
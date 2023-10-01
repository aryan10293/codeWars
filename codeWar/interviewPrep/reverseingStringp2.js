var reverseStr = function(s, k) {
    let array = []
    let num = 0
    let answer
    console.log(typeof answer)
    for (let i = 0; i < s.length; i += k) {
        let chunk = s.substring(i, i + k);
        array.push(chunk);
    }
    for(let i = 0; i<array.length; i++){
      if (i % 2 === 0){
        console.log(array[i].split('').reverse().join(''))
        answer === undefined ? answer = array[i].split('').reverse().join('') : answer += array[i].split('').reverse().join('')
      } else {
        console.log(array[i])
        answer += array[i]
      }
    }
    console.log(array)
     return answer
};
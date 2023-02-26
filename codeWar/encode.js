const arr = ['a', 'e', 'i', 'o', 'u']
function encode(string) {
  let answer = ''
  for(let i = 0; i<string.length;i++){
    arr.includes(string[i]) ? answer+= arr.indexOf(string[i])+1 : answer+=string[i]
    }
  return answer
}

function decode(string) {
  let answer = ''
  for(let i = 0; i<string.length;i++){
    Number(string[i]) > 0 && Number(string[i]) < 6 ? answer+= arr[Number(string[i])-1] : answer+=string[i]
    }
  return answer
}
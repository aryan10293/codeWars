function cleanString(s) {
    //... your code ...
    let answer = []
    s.split('').forEach(x => {x !== '#' ? answer.push(x) : answer.pop()})
    return answer.join('')
  }
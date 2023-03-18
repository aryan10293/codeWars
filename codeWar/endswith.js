function solution(str, ending){
    // TODO: complete
    return str.slice(-(ending.length)) === ending || ending === ''
  }
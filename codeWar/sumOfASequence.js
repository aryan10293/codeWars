const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let answer = 0
  for(let i = begin; i<=end; i+=step){
    answer+=i
  }
    return answer
};
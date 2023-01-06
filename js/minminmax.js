function minMinMax(array) {
    // solution goes here!
    let answer = []
    let sorted = array.sort((a,b) => a-b)
    let small = sorted[0]
    let large = sorted[sorted.length - 1]
    answer[0] = small
    answer[2] = large
    for(let i = small; i < large; i++) {
      if(sorted.indexOf(i) === -1) {
        answer[1] = i
        break
      } 
     }
    return answer
  }
  minMinMax([-1, 4, 5, -23, 24])
  minMinMax([1, 3, -3, -2, 8, -1])
  minMinMax([2, -4, 8, -5, 9, 7])
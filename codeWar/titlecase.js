function titleCase(title, minorWords) {
    if(title === '') return ''
    if(minorWords === undefined) minorWords = ''
    title = title.toLowerCase().split(' ')
    minorWords = minorWords.toLowerCase().split(' ')
    let answer = []
    title.forEach((x,i )=> {
      if(minorWords.includes(x)){
          if(x === title[0] && i === 0){
            answer.push(x.charAt(0).toUpperCase() + x.slice(1))
          } else {
            answer.push(x.toLowerCase())
          }
        } else {
          answer.push(x.charAt(0).toUpperCase() + x.slice(1))
        }
    })
    return answer.join(' ')
  }
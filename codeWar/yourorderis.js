function order(words){
    // ...
    let arr = []
    let answer = []
    words = words.split(' ')
    words.forEach((x,i) => {
      x = x.split('')
      let lol = x.map(l => {
        if(typeof 1+parseInt(l) === 'numberNaN'){
          return `${l}`
        } else {
          return Number(l)
        }
      })
  //    arr.push(lol)
     lol.forEach((element,index) => {
        if(typeof element === 'number'){
          //console.log(element,x,index)
          x.slice(index)
          x.unshift(element)
          arr.push(x)
        }
     })
    })
    //console.log(arr)
    let yay = arr.sort((a,b) => a[0] - b[0])
    yay.forEach(x => {
      x.shift()
      answer.push(x.join(''))
    })
    return answer.join(' ')
  }
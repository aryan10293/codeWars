function high(x){
    let wordsArr = x.split(' ')
    let alhpa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let high = ''
    let highCount = 0
    wordsArr.forEach(x => {
        let count = 0
        for(let i = 0; i < x.length; i++){
            count += alhpa.indexOf(x[i]) + 1
        }
        if (count > highCount){
            highCount = count
            high = x
        }
    })
    return high
  }
 high('aaa ')
 high('d bb')
   high('bb d')
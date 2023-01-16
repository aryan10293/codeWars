function digitalRoot(n) {
    let lol = n.toString()
    lol = lol.split('')
    while(lol.length > 1){
    let num = lol.reduce((a,b) => {return Number(a) + Number(b)}, 0)
    if(num === undefined){
        return o
    }
    if(num <= 9){
        lol = 1
        console.log(num)
      } else {
        lol = num.toString()
        lol = lol.split('')
      }
    }
  
  }
  digitalRoot(195)
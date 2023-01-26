function digitalRoot(n) {
    if(n < 10){
      return n
    }
      let lol = n.toString()
      lol = lol.split('')
      while(lol.length > 1){
      let num = lol.reduce((a,b) => {return Number(a) + Number(b)}, 0)
      if(num <= 9){
          lol = 1
          return num
        } else {
          lol = num.toString()
          lol = lol.split('')
        }
      }
    
    }
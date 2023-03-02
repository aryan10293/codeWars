function Xbonacci(signature,n){
    //your code here
    const lol = []
    signature.forEach(x => lol.push(x))
    let num;
    if(lol.length > n ){
      return lol.slice(0,n)
    } else {
      num = n-lol.length
    }
    if(lol.length < 3){
      let yay = signature.splice(-2)
        for(let i = 0; i<num; i++){
          let cool = yay.reduce((a,b) => {return a+b}, 0)
          yay.shift()
          yay.push(cool)
          lol.push(cool)
        }
      return lol
      }
    if(lol.length >= 3){
      let yay = signature.splice(-n)
        for(let i = 0; i<num; i++){
          let cool = yay.reduce((a,b) => {return a+b}, 0)
          yay.shift()
          yay.push(cool)
          lol.push(cool)
      }
      return lol
    }
  }
  
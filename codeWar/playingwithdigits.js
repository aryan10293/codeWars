function digPow(n, p){
    // ..
    let idk = `${n}`.split('').map((x,index) => {return Math.pow(x, p+index)}).reduce((a,b) => {return a+b},0) / n 
    if(idk >= 1 && idk%1===0){
      return idk
    } else {
      return -1
    }
  }
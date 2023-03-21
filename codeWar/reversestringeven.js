function reverse(str){
    //WRITE SOME MAGIC
    return str.split(' ').map((x,i) => {return i%2 === 1 ?  x.split('').reverse().join('') : x}).join(' ').trim()
  }
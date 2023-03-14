function smallEnough(a, limit){
    return !a.map(x => {return x <= limit ? true : false}).includes(false)
  }
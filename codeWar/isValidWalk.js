function isValidWalk(walk) {
    //insert brilliant code here
    let n = 0
    let s = 0
    let e = 0
    let w = 0
    walk.forEach(x => {
      if(x === 'n'){
        n++
      } else if(x === 's'){
        s++
      } else if(x === 'e'){
        e++
      }  else if(x === 'w'){
        w++
      }
    })
    let minutes = n+w+s+e === 10
    if((n === s ) && (w === e) && (minutes)){
      return true
    }
    return false 
  }
function findOdd(a) {
    //happy coding!
    let lol = []
    a.forEach((cool,b,c) => {
      c.forEach((ele,index,arr) => {
          if(cool === arr[index]){
          lol.push(cool)
        }
      })
      if(lol.length % 2 === 1){
    
      } else {
        lol = []
      }
    })
    return lol[0]
  }
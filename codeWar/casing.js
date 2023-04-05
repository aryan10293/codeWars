function capitalize(s){
    let capOdd = s.split('').map((x,a) => {
      if(a%2 === 1){
        return x.toUpperCase()
      } else {
        return x
      }
    }).join('')
      let capEven = s.split('').map((x,a) => {
      if(a%2 === 0){
        return x.toUpperCase()
      } else {
        return x
      }
    }).join('')
    return [capEven,capOdd];
  };
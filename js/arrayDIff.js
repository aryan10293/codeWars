function arrayDiff(a, b) {
    let cool = []
    a.forEach(x => {
    if(b.indexOf(x) === -1){
      cool.push(x)
      }
    })
    return cool
  }

arrayDiff([15,2,1,-8,-14,17,0],[15,2,1,-8])
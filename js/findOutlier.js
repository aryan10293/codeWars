function findOutlier(integers){
    //your code here
    let even = []
    integers.forEach(x => { if(x % 2 === 0){ even.push(x)}})
    let odd = integers.filter(x => { if(x % 2 === 1 || x % 2 === -1){ return x}})
    return even.length > odd.length ? odd[0] : even[0]
  }
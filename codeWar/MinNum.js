function minValue(values){
  //your code here
  let obj = {}
  values = values.sort()
  values = values.filter(a => {
    if(!obj[a]){
      obj[a]=1
      return a
    }
  })
  return Number(values.join(''))
}
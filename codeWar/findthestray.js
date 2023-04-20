function stray(numbers) {
  let obj = {}
  numbers.forEach(x => {
    if (!(x in obj)) {
      obj[`${x}`] = 1
    } else {
      obj[`${x}`] = obj[`${x}`] + 1
    }
  })
  for (const num in obj) {
    if(obj[num] === 1){
      return Number(num)
    }
}
}
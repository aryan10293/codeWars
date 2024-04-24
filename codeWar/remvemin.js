function removeSmallest(numbers) {
  //   return [];
  let lol = []
  let num = numbers.filter((a) => {
    if (a === Math.min(...numbers) && !lol.includes(a)) {
      lol.push(a)
    } else {
      return a
    }
  })
  return num
}

function removeSmallest(numbers) {
  //console.log(numbers.indexOf(Math.min(...numbers)))
  let lol = []
  const index = numbers.indexOf(Math.min(...numbers))
  numbers.forEach((x,  i) =>  i  != index ? lol.push(x) : null)
  return lol
}
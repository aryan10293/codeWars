function evenNumbers(array, number) {
  return array.filter(x => x%2 === 0 ? x : null).slice(-number)
}
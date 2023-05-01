function secondSymbol(s, symbol) {
  // your code
  const first = s.slice(0, s.indexOf(symbol) + 1).length
  const second = s.slice(s.indexOf(symbol) + 1).indexOf(symbol)
  return second === -1 ? -1 : first + second
}
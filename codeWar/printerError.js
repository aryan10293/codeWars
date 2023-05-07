function printerError(s) {
    // your code
  let arr = 0
  const alphabet = "abcdefghijklmnopqrstuvwxyz" //.split("").map(letter => letter.toLowerCase());
  s.split('').forEach(x => alphabet.indexOf(x) > alphabet.indexOf('m') ?  arr++ : null)
  return `${arr}/${s.length}`
}
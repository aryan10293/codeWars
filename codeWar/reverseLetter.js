function reverseLetter(str) {
  //coding and coding..
  
  return str.split('').filter(x => 'qwertyuioplkjhgfdsazxcvbnm'.includes(x) ? x : null).reverse().join('')
  
}
var replaceDots = function(str) {
  return str.split('').map(x => x === '.' ? '-' : x).join('');
}
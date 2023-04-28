function findShort(s){
  return s.split(' ').sort((a,b) => {return a.length - b.length})[0].length
}
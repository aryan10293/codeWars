function XO(str) {
    //code here
  return str.split('').map(x => x.toLowerCase()).filter(x => x==='x').length === str.split('').map(x => x.toLowerCase()).filter(x => x==='o').length
}
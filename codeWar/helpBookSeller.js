function stockList(listOfArt, listOfCat){
  // ... 
  console.log(listOfArt, listOfCat)
  let str = ''
  let obj = {}
  for(let i in listOfCat){
    obj[listOfCat[i]] = 0
  }
  for(let i in listOfArt){
    let cool = listOfArt[i].split(' ')
    if(listOfCat.includes(cool[0][0])){
      obj[cool[0][0]] = obj[cool[0][0]] + Number(cool[1])
    }
  }
  for(let key in obj){
    str += `(${key} : ${obj[key]}) - `
  }
  return str.slice(0,-3) 
}
let b,c,res
    b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
    c = ["A", "B", "C", "D"]
console.log(stockList(b, c))
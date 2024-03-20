function trilingualDemocracy(group) {
  // implement the rules...
  let arr = ['D', 'F', 'I', 'K']
  let obj = {}
  let answer
    for(let i = 0; i<group.length; i++){
        if(!obj[group[i]]){
            obj[group[i]] = 1
        } else {
            obj[group[i]] = obj[group[i]] + 1
        }
    }
  let lol = Object.keys(obj)
  if(lol.length === 1){
    return lol[0]
  } else if(lol.length === 2){
    let low = 10
    let idk
    for(key in obj){
      if(obj[key] < low){
        low = obj[key]
        idk = key
      }
    }
    return idk
  } else {
      for(let i = 0; i<arr.length; i++){
      if(!obj[arr[i]]){
        return arr[i]
        break
      }
    }
  }
}
function highestRank(arr){
    //Your Code logic should written here
      let obj = {}
      let answer = []
      let lol = 0
     for(let i = 0; i<arr.length; i++){
        if(!(arr[i] in obj)){
          obj[arr[i]] = 1
        } else {
          obj[arr[i]] = obj[arr[i]] + 1
        }
      }
      for(let key in obj){
        if(obj[key] > lol) lol = obj[key]
      }
      for(let key in obj){
        if(obj[key] === lol){
          answer.push(key)
        }
      }
      return Math.max(...answer.map(x => Number(x)))
    }
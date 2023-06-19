var groupAnagrams = function(strs) {
    let count = 0
    const sortedStrs = strs.map(word => word.split('').sort().join(''))
    const obj = {}
    for(let i = 0; i<strs.length; i++){
        if(i === 0)obj[strs[i]] = [strs[i]]
        if(i>0){
          for(let key in obj){
                for(let j = 0; j<obj[key][0].length; j++){
                    let cool = obj[key][0].split('').sort().join('')
                    if(cool[j] === sortedStrs[i][j]){
                        count ++
                    } else {
                        obj[strs[i]] = [strs[i]]
                    }
                }
                    if(count === strs[0].length){
                        obj[key].push(strs[i])
                        if(Object.keys(obj).length !== 1) delete obj[strs[i]]
                        break
                    }
                count = 0
            }
        }

    }
     return Object.values(obj)
};
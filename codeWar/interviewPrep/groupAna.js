/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let count = 0
    const sortedStrs = strs.map(word => word.split('').sort().join(''))
    const obj = {}
    let check = true
    for(let i = 0; i<strs.length; i++){
         check = false
        if(i === 0)obj[strs[i]] = [strs[i]]
        let keys = Object.keys(obj)
        //console.log(2121, keys)
        if(i>0){
          for(let key in obj){
            let memory = {}
            //console.log(obj[key][0])
                for(let j = 0; j<obj[key][0].length; j++){
                    let cool = obj[key][0].split('').sort().join('')
                    //console.log(i, cool[j], sortedStrs[i][j])
                    if(cool[j] === sortedStrs[i][j]) count ++
                }
                console.log(count, i,key, strs[i])
                if(!check){
                    if(count === strs[0].length){
                        //console.log(count, strs[i])
                        obj[key].push(strs[i])
                        check = true
                        break
                        //console.log(obj) 
                    } else {
                        obj[strs[i]] = [strs[i]]
                    }
                }
                count = 0
            }
        }

    }
    console.log(Object.values(obj))
};
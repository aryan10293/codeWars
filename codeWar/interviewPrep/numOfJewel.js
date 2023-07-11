var numJewelsInStones = function(jewels, stones) {
    let numOfJew = {}
    let total = 0
    for(let i = 0; i<jewels.length; i++){
        numOfJew[jewels[i]] = 0
    }
    for(let i = 0; i<stones.length; i++){
        if(numOfJew[stones[i]] !== undefined){
            total++
        }
    }
    
    return total
}
var heightChecker = function(heights) {
    let count = 0
    let lol = [...heights]
    for(let i = 0; i < lol.length; i++){
        for(let j = 0; j< lol.length - 1 - i; j++){
            if(lol[j + 1 ] < lol[j]){
                const temp = lol[j]
                lol[j] = lol[j + 1]
                lol[j + 1] = temp
            }
        }
    }
    for(let i = 0; i<lol.length; i++){
        if(lol[i] !== heights[i]) count ++
    }
    return count
};
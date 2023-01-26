function duplicateCount(text){
    let lol = []
    text.split('').map(x => x.toLowerCase()).forEach((element, index, arr) => {
        let first = text[index]
        let yay = arr.slice(index + 1)
        if(yay.includes(first)){
            if(!lol.includes(first)){
                lol.push(first)
            }
        }
    })
    return lol.length
}

duplicateCount("Indivisibilities")
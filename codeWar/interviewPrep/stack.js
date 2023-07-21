function equalStacks(h1, h2, h3) {
    // Write your code here
    console.log(h1.reduce((a,b) => {return a +b}, 0))
    h1 = h1.reverse()
    h2 = h2.reverse()
    h3 = h3.reverse()
    let h1Total = h1.reduce((a,b) => {return a+b})
    let h2Total = h2.reduce((a,b) => {return a+b})
    let h3Total = h3.reduce((a,b) => {return a+b})
    while(h1Total !== h2Total || h1Total !== h3Total){
        if(h1Total !== h2Total){
            let cool = h1.pop()
            let lol = h2.pop()
            console.log(22, cool,lol)
            h1Total -= cool
            h2Total -= lol
        }
        if(h1Total !== h3Total){
            h3Total -= h3.pop()
        }
    }
    return h1Total
}
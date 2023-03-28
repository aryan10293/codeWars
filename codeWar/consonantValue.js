function solve(s) {
    const lol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map(x => x.toLowerCase());
    let cool = 0
    let arr = []
    let idk = []
    for(let i = 0; i<s.length;i++){
      if(!'aeiou'.includes(s[i])){
        idk.push(s[i])
      } else {
        arr.push(idk)
        idk = []
      }
      if(idk.length > 0 && i+1 === s.length) arr.push(idk)
      arr = arr.filter(x => {if(x.length > 0)return x})
    }
    arr = arr.map(x => { return x.reduce((a,b) => { return a + (lol.indexOf(b) + 1)}, 0)})
    return Math.max(...arr)
  };
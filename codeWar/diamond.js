function diamond(n){
    let lol = ''
    let loop = Math.floor(n/2)
    let minus = 1
    if(n%2===0||n<0) return null
    for(let i = 1; i<=n; i+=2){
      lol+= ' '.repeat(loop)
      lol+= '*'.repeat(i)
      lol+=`\n`
      loop--
    }
      for(let i = n-2; i>=1; i-=2){
      lol+= ' '.repeat(minus)
      lol+= '*'.repeat(i)
      lol+=`\n`
      minus++
    }
    return lol
  }
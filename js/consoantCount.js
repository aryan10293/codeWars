function consonantCount(str) {
    // ...
    let count = 0
    let vowels = ['a','e', 'i','o','u']
    let letters = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"].map(x => x.toLowerCase())
    let arr = str.split('').map(x => x.toLowerCase())
    arr.forEach(x => {
        if(!vowels.includes(x) && letters.includes(x)){
            count++
        }
    })
    console.log(count)
  }
  consonantCount('012345_Cb')
  consonantCount('0123456789')
  consonantCount('h^$&^#$&^elLo world')
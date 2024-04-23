function high(x){
    let wordsArr = x.split(' ')
    let alhpa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let high = ''
    let highCount = 0
    wordsArr.forEach(x => {
        let count = 0
        for(let i = 0; i < x.length; i++){
            count += alhpa.indexOf(x[i]) + 1
        }
        if (count > highCount){
            highCount = count
            high = x
        }
    })
    return high
  }
function high(x){
  x = x.split(' ')
  const alphabet = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };
  
  let score = 0
  let word;
  for(let i in x){
    let count = 0
    for(let j in x[i]){
      count += alphabet[x[i][j]]
    }
    if(count > score){
      word = x[i]
      score = count
    }
  }
  return word
}
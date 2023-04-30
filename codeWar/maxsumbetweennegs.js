function maxSumBetweenTwoNegatives(a) {
      let arr = []
      let num1 = 0
      let num2 = 1
      let answer = 0
      a.forEach(( x, i) = > { i f  (x < 0) arr.p ush(i) })
       if (arr.length <= 1) return -1
      console.log(ar r, a)
      f or (let i = 0 ;  i < arr.l e ngth -  1; i++) {
            let cool = 0
            let lol = a.slice(arr[num1], arr[num2])
             for (let j =   0; j < lol.lengt h; j++) {
                   if (lol[ j] > 0) {
                          cool += lol[j]
                  }
            }
             if (cool > answer) answer = cool
            num1++
            num2++
      }
      return answer
}
axSumBetweenTwoNegatives([1,  -2])
function removeSmallest(numbers) {
    //   return [];
      let lol = []
      let num = numbers.filter((a) => {
        if(a === Math.min(...numbers) && !lol.includes(a)){
          lol.push(a)
        } else {
          return a
        }
      })
    return num
    }
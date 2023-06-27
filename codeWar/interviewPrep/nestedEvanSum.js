function nestedEvenSum(obj){
    let answer = []
    let total = 0
    function helper(obj){
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Nested object found, recursively call the function
            helper(obj[key]);
            } else {
                if(typeof obj[key] === 'number' && obj[key] % 2 === 0) total += obj[key]
            }
        }
    }
    helper(obj)
    console.log(total)
}
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: 3,
      alsoNotANumber: "yup"
    }
  }
}
nestedEvenSum(obj1)
function recursiveRange(number){
    let total = number 
    function sum(num){
        if (num === 0) return
        total += num
        sum(num - 1)
    }
   sum(number - 1)
   return total
}
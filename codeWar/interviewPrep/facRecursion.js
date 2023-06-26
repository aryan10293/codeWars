function factorial(num){
   let total = 1
   function fac(number){
       if (number <= 1) return 
       total = total * number
       fac(number - 1)
   }
   fac(num)
   return total
}
console.log(factorial(120))
function convertFrac(lst){
  //Your code here
  let hcf;
  const number1 = lst[0][1]
  const number2 = lst[1][1]
  const number3 = lst[2][1]
  let str = ''
  function findLCD(num1, num2, num3) {
    // Function to find the greatest common divisor (GCD) of two numbers
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    // Function to find the least common multiple (LCM) of two numbers
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // Calculate the LCM of three numbers by using the LCM of two numbers iteratively
    let result = lcm(num1, lcm(num2, num3));
    return result;
  }
  const lcm = findLCD(number1,number2,number3)
  for(let i = 0; i<lst.length; i++){
    let idk = lcm/lst[i][1]
    str += `(${idk},${lcm})`
  }
  return str
}
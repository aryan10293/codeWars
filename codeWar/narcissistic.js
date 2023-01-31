function narcissistic(value) {
    // Code me to return true or false
    // get digit lenth of number 
    // square each number by digit length
    // add each sqaured numbe up
    // if sqaured number is equal to value return true 
    let lol = `${value}`.length
   return `${value}`.split('').map(x => Math.pow(Number(x), lol)).reduce((a,b) => {return a+b}, 0) === value
  }
  //only dealing with  whole numbers
  // return true of false
  
  
function oddOrEven(array) {
    //enter code here
   return array.reduce((a,b) => {return a+b}, 0) % 2 === 0 ? 'even' : 'odd'
 }
var getSum = function(a, b) {
    // i want to make a array
    // i wan to loop through the two intergers
    // on each iteration add a element to the array
    // return the array cause that should add the total elements in it 
    // with this method i might face a issure with negative integers
    // with negative numbers im going to unshift elements from the array
    // got to use a condition to determine if its negative
    // what if theres nothing in the array
    let arrPos = []
    let arrNeg = []
    if(a>=0){
        for(let i = 0; i<a; i++){
            arrPos.push(i)
        }
    } else {
        for(let i = 0; i<Math.abs(a); i++){
            arrNeg.push(i)
        }        
    }

    if(b>=0){
        for(let i = 0; i<b; i++){
            arrPos.push(i)
        }
    } else {
        for(let i = 0; i<Math.abs(b); i++){
            arrNeg.push(i)
        }        
    }

    // will set both of my arrays to try and do the equation
    // if arrPos is greater than arrNeg then we will return a pos number
        // and arrNeg is greater than 0 
         // lopp through and uhsift from arrpos return it when finished 
         // else return arrpos if arrNeg has no elements 
    if(arrPos.length > arrNeg.length && arrNeg.length> 0){
         for(let i = 0; i<arrNeg.length; i++){
            arrPos.shift()
        }
        return arrPos.length             
    } else if (arrNeg.length === 0){
        return arrPos.length
    } else if (arrNeg.length > arrPos.length && arrPos.length> 0){
         for(let i = 0; i<arrPos.length; i++){
            arrNeg.shift()
        }
        return -(arrNeg.length)
    } else if (arrPos.length === 0){
        return -(arrNeg.length)
    } else if(arrPos.length === arrNeg.length) return 0
  // if arrNeg is greater than arrPos then we will return a neg number

};
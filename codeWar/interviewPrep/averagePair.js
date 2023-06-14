function averagePair(arr, avg){
  // add whatever parameters you deem necessary - good luck!
  // i would adjust my target to double it ex: 2.5 => 5: 8 => 16
  // then i would create a object 
  // in the object im going to store the numbers in the array that we already seen 
  // im going to create a for loop over the array
  // im going to check each index to see if its pair is in the object 
    // if it isnt add that number to the object
    // if it is return true 
// at the end of the loop if we havent returned true then return false meaning there is no average pair
    const target = avg + avg
    const obj = {}
    for(let i = 0; i<arr.length; i++){
        let current = arr[i]
        obj[current] = current
        if(obj.hasOwnProperty(target - current)){
            return true
        }
    }
    return false 
}
console.log(averagePair([], 4) ) // true
function findEvenIndex(arr){
    //Code goes here!
    for(let index = 0; index<arr.length; index++){
      let cool = arr.slice(0,index).reduce((a,b) => {return a+b}, 0)
      let yay = arr.slice(index+1, arr.length).reduce((a,b) => {return a+b}, 0)
      if(yay === cool) return index
    }
    return -1
  }
  // loop through each index on the array
  //slice the array at each index to make two sides
  // add up each element in the sliced arrays to check if both sides are even
  // make a conditional
  // if both sides are even return the index 
  // return -1
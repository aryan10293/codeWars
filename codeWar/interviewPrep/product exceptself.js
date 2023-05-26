var productExceptSelf = function(nums) {
    // create a variable array
    let answer = []
    let cool = [...nums]
    // loop through array parameter
    // while looping through the array. delete the current iteation of the array
    // use a reduce method on the array and push returned value through to the created variable 
    // when loop is done return the created array
    for(let i = 0; i<nums.length; i++){
        let lol = cool.splice(i,1)
        answer.push(cool.reduce((a,b) => {return a*b}, 1))
        cool = [...nums]
    }
    return answer
};
//solution is not optimal

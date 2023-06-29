var findDuplicates = function(nums) {
    // create a hash
    // loop through array
    // if element isnt in the array add it to the hash and give it the property of 1
    // if it is in the array give increment the key by 1
    // loop throught the hash and get the elements with proerties greater than 1 and push them into an array

    let obj = {}
    let answer = []
    nums.forEach(x => {
        obj[`${x}`] = obj[`${x}`] + 1 || 1
    })
    for(key in obj){
        if(obj[key]>1){
            answer.push(Number(key))
        }
    }
    return answer
}
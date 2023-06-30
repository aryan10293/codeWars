var lengthOfLongestSubstring = function (s) {
    // create a object
    // create highest
    // create a count
    // create a index this might be the same as count
    // loop through string 
    // if the current element isnt in the object. 
    // add it to the object. 
    // increase index
    // increment count by 1
    // compare current high to count
    // if it is in the object 
    // clear the object 
    // set count back to 0

    let obj = {}
    let highest = 0
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (!obj.hasOwnProperty(s[i])) {
            obj[s[i]] = s[i]
            count++
            highest = Math.max(count, highest)
        } else {
            obj = {}
            obj[s[i]] = s[i]
            count = 1
            highest = Math.max(count, highest)
        }
    }
    return highest
}
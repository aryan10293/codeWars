/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    // check if strings are the same length
        // if not retrun false
        // if true continue
    // loop through both strings 
    // compare s to the back of goal. 
    // if there not equal return false
    // if it never return false return true 
    let obj = {}
    let arr = []
    if(s.length !== goal.length){
        return false
    }
    if(s.split('').reverse().join('') === goal){
        return true
    }
    for(let i = 0; i<s.length; i++){
        if(s[i] !== goal[i]){
            arr.push(i)
        }
    }
    console.log(arr)
    if((arr.length === 2) && (s.charAt(arr[0]) === goal.charAt(arr[1])) && s.charAt(arr[1])=== goal.charAt(arr[0])){
        return true
    } else {
        return false
    }
};
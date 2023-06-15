function findLongestSubstring(str){
    //you want to have a varable that starts at the start of the string
    // have a varble that keeps track of the length of the sub string
    // have a varible that keeps track of the sub string 
    // have a varible that keep track of the index
    // loop through the string
    // check if the current letter is part of the sub string 
        // if not concat it 

        // if it is splice the substring at the first appearance of the current string and make that the new sub string 

        // on every iteration check the length of the substright and the max sub

    // let longest = 0
    // let index = 1
    // let i = 0
    // let obj = {}
    // while(index < str.length){
        
    //     let current =  str[i]
    //     obj[current] = obj[current] + 1 || 1
    //     if(obj[current] > 1){
    //         obj[current] = obj[current] - 1
    //         index++
    //         i = index
    //     } else {
    //         console.log(obj)
    //         longest = Math.max(Object.keys(obj).length, longest)
    //     }
    //     i++
    // }
    // console.log(longest)
    let max = 0
    let windowStart = 0
    let obj = {}
    for(let i = 0; i<str.length; i++){
        let right = str[i]
        obj[right] = obj[right] + 1 || 1
        while(obj[right]>1){
            let left = str[windowStart]
            if(obj[left]>1){
                obj[left] = obj[left] - 1
            } else {
                delete obj[left]
            }
            windowStart++
        }
     max =    Math.max(max, (i-windowStart) + 1)
    }
    console.log(max)
}
 findLongestSubstring('') // 0
 findLongestSubstring('rithmschool') // 7
 findLongestSubstring('thisisawesome') // 6
  findLongestSubstring('thecatinthehat') // 7
  findLongestSubstring('bbbbbb') // 1
  findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
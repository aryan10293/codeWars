function validAnagram(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  // check to see if str are the same length
  // make a two obj variable
  // loop through the strings and add each characer to the object
  // if character occurs more than 1 just incremenet it dont add other key to the object 
  // you wanna make more loops to loop through the object to check if the character occur the same anount of times
  // if these conditions fail return false 
  // at the end return true 
    if(str1.length !== str2.length){
        return false
    } 
    let string1 = {}
    let string2 = {}
    for(let i = 0; i<str1.length; i++){
        string1[str1[i]] = string1[str1[i]] + 1 || 1
        string2[str2[i]] = string2[str2[i]] + 1 || 1
    }
    for(key in string1){
        if(string1[key] !== string2[key]){
            return false
        }
    }
    return true
}
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
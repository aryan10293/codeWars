function isSubsequence(word, string) {
  // good luck. Add any arguments you deem necessary.
  // i want to keep track of the index of the character in the smaller string, in the long string 
  // if indexOf is < index or === -1 return false 
    // else reassign index 
// at the end of the loop if nothing has returned false return true
  let wordP = 0
  let stringP = 0
  while(stringP < string.length){
    console.log(string.charAt(stringP), word.charAt(wordP))
    if(string.charAt(stringP) === word.charAt(wordP)){
        wordP++
        if(wordP === word.length) return true
    }
    stringP += 1
  }
  return false
}
//isSubsequence('abc', 'acb')
console.log(isSubsequence("Thqckbrwnfxjmpdvrthlzydg", 'The quick brown fox jumped over the lazy dog'))
// hello world 1 hello
// yo 1 yo
// sting 1 sing
// abracadabra 1 abc
// Madam, I'm Adam 1 aaa
// The quick brown fox jumped over the lazy dog 1 Thqckbrwnfxjmpdvrthlzydg
function spinWords(string){
    let sen;
    let arr = string.split(' ')
   let idk =  arr.map(element => {
        if(element.length >= 5){
            element = element.split('').reverse().join('')
            return element
        } else {
            return element
        }
    })
    idk.forEach(element => {
        sen += `${element} `
    });
    return sen.slice(9).slice(0,-1)
  }

spinWords("Hey fellow warriors")
// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
//  Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
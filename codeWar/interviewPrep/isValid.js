var isValid = function(s) {
    // turn string into an array
    // loop through array
    //pop of top element
    // check if top element is a match 
    // if true continue and pop off element you just checked 
    // if false return false 
    // 
    let closeP = ')'
    let openP = '('
    let closeB = ']'
    let openB = '['
    let closeC = '}'
    let openC = '{'
    s = s.split('')
    for(let i = 0; i<s.length; i++){
        let top = s.pop()
        let check = s.pop()
        console.log(check, top)
        if (top === closeP && openP === check){
            continue
        } else if (top === closeB && openB === check){
            continue
        }  else if (top === closeC && openC === check){
            continue
        } else {
            return false
        }
    }
    return true
};
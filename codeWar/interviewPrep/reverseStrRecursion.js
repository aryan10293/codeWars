function reverse(str){
    let count = 1
    let newStr = ''
    function revStr(){
        if(count === str.length + 1) return
        newStr+=str[str.length - count]
        count ++
        revStr()
    }
    revStr()
    return newStr
  // add whatever parameters you deem necessary - good luck!
}
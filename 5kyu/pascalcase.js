function toUnderscore(str) {
    // TODO: complete 
    str = `${str}`
    let answer = ''
    for(let i = 0; i<str.length; i++){
    if(i === 0){  
      answer+=str[i].toLowerCase()
    }else if((str[i] === str[i].toUpperCase()) && ( !(Number(str[i]) > 0 &&  Number(str[i]) < 9)) ) {
       //console.log(str[i]) 
        answer+='_'
        answer+=str[i].toLowerCase()
      } else {
        answer+=str[i]
      }
    }
    return answer
  }
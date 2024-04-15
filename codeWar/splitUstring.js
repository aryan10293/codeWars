function solution(str){
   let lol = []
   let start = 0
   let end = 1
   while(end<=str.length){
     if(end >= str.length){
       lol.push(str[start] + '_')
     } else {
       lol.push(str[start] + str[end])
     }
      
     start+=2
     end+=2
   }
  return lol
}
solution("abcdefg")
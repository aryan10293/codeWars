function myLanguages(results) {
  let answer = []
  for(let key in results){
    if(results[key] >= 60)answer.push([key,results[key]])
  }
  return answer.sort((a,b)=>{return b[1]-a[1]}).map(a=>a[0])
}
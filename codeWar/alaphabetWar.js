function alphabetWar(fight){

  let count = 0
  let obj = {
     'w' : 4,
     'p' : 3,
     'b' : 2,
     's' : 1,
      'm' :-4,
       'q' :-3,
       'd' :-2,
      'z' :-1,
  }
  for(let i = 0; i<fight.length; i++){
    if(obj[fight[i]])count += obj[fight[i]]
  }
  console.log(count)
  return count === 0 ? "Let's fight again!" : count > 0 ? "Left side wins!" : "Right side wins!"
}
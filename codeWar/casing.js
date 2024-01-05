function capitalize(s){
    let capOdd = s.split('').map((x,a) => {
      if(a%2 === 1){
        return x.toUpperCase()
      } else {
        return x
      }
    }).join('')
      let capEven = s.split('').map((x,a) => {
      if(a%2 === 0){
        return x.toUpperCase()
      } else {
        return x
      }
    }).join('')
    return [capEven,capOdd];
  };

  // drej needs to get better 
  // drej got a little better
  // im getting a rythem again  just gotta start working on my preject and doing some leetcode but everything else is going good
  // lit two off days. started class. filmed two tiktoks 3 tiktok posted 1. did little homework, wasnt to hard lol. uhhhh still gotta work on my project though
  // avgerage day
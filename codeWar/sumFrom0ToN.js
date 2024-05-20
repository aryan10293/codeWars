var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    // for
      //while
    let num = []
    console.log(count)
    if(count === 0){
      return '0=0'
    } else if(count < 0){
      return `${count}<0`
    }
    for(let i = 0; i<=count; i++){num.push(i)}
    return `${num.join('+')} = ${num.reduce((a,b) => {return a+b}, 0)}`.trim()
  };

  return SequenceSum;

})();
// complete the function
Array.prototype.nthIndexOf = function(e, n) {
    var index = -1;
    for (var i = 0, len = this.length; i < len; i++) {
        if (i in this && e === this[i] && !--n) {
            index = i;
            break;
        }
    }
    return index;
};
function solution(string) {
  let yay = string.split('')
  let indexOfx = 0
  let count = 0
  let multiple = []
  let lol = string.split('')
    lol.forEach(x => {
      if(x !== x.toLowerCase()){
        if(multiple.includes(x)){
          indexOfx = lol.nthIndexOf(x, 2)
        } else {
         indexOfx = lol.indexOf(x) 
        }
        if(count > 0) indexOfx = indexOfx + count
        yay.splice(indexOfx, 0, " ");
        count++
        multiple.push(x)
      }
    })
    console.log(multiple)
    console.log(yay.join(''))
    return yay.join('')
}

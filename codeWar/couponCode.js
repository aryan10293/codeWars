function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) return false
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct','Nov','Dec']
  currentDate = currentDate.split(' ')
  expirationDate = expirationDate.split(' ')
  if(Number(currentDate[2]) === Number(expirationDate[2]) && month.indexOf(currentDate[0].slice(0,3)) === month.indexOf(expirationDate[0].slice(0,3)) && Number(currentDate[1].slice(0,-1)) === Number(expirationDate[1].slice(0,-1)))return true
  if(Number(currentDate[2]) === Number(expirationDate[2])){
    if(month.indexOf(currentDate[0].slice(0,3)) === month.indexOf(expirationDate[0].slice(0,3))){
      if(Number(currentDate[1].slice(0,-1)) < Number(expirationDate[1].slice(0,-1))){
        return true
      } else {
        false
      }
    } else if(month.indexOf(currentDate[0].slice(0,3)) < month.indexOf(expirationDate[0].slice(0,3))){
      return true
    } else {
      return false
    }
  } else if(Number(currentDate[2]) < Number(expirationDate[2])){
    return true
  } else false
  
   return false
}
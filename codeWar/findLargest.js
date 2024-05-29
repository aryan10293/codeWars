function findLongest(array){
  // code here
  let largest;
  let dig = 0
  for(let i = 0; i<array.length; i++){
    let idk = `${array[i]}`.length
    if(idk>dig){
      dig = idk
      largest = array[i]
    }
  }
  return largest
}
function trim(str, size) {
  if(size <= 3){
    return str.length <= size ? str : str.slice(0,size) + '...';
  }
  console.log(str,size)
   return str.length <= size ? str : str.slice(0,size-3) + '...';
}
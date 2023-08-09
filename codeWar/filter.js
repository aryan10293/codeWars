function removeEveryOther(arr)  {
      //your code here
      return arr.filter(( x, i) =>   i %  2 === 0 ? x : null)
}
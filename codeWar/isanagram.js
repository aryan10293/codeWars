// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
      let testObj= {}
      let oriObj = {}
    if(test.length !== original.length) return false
     for(let i = 0; i<test.length; i++){
      if(!(test[i] in testObj)){
        testObj[`${test[i]}`] = 1
      } else {
        testObj[`${test[i]}`] = testObj[`${test[i]}`] + 1
      }
       
      if(!(original[i] in oriObj)){
        oriObj[`${original[i]}`] = 1
      } else {
        oriObj[`${original[i]}`] = oriObj[`${original[i]}`] + 1
      }
    }
    
    let sortable = [];
    for (var letter in testObj) {
      sortable.push([letter, testObj[letter]]);
  }
  sortable = sortable.sort(function(a, b) {
      return a[0].localeCompare(b[0]);
  });
    
    let oriArr = [];
    for (var letter in oriObj) {
      oriArr.push([letter, oriObj[letter]]);
  }
  oriArr = oriArr.sort(function(a, b) {
      return a[0].localeCompare(b[0]);
  });
    
  for(let i = 0; i<sortable.length; i++){
      console.log(sortable[i][0])
    if(sortable[i][0] !== oriArr[i][0] || sortable[i][1] !== oriArr[i][1]){
      return false
    }
  }
    return true 
  };
  
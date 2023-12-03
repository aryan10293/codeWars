function twoSum(numbers, target) {
    // ...
    let answer = 0
    for(let i = 0; i<numbers.length;i++){
      for(let j = 0; j<numbers.length; j++){
        if(i!==j){
          if(numbers[i] + numbers[j] === target){
            console.log(j,i)
            answer = [j,i]
            return answer
          }
        }
      }
    }
  }

  /// this shit easy]

  var twoSum = function(nums, target) {
    // create a object to hold number
    // insid the object you want to hold the number and its in dices
    // as you loop through the array check to see if the difference is in the object
    // if the difference is in the object reuturn true 

    // below is gfoign to be a obj that holds the numbers and its indices
    let lol = {}

    for(let i = 0; i<nums.length; i++){
        let cool = target - nums[i]
        if(lol[cool]){
            return [i, lol[cool][0]]
        } else {
            lol[nums[i]] = [i]
        }
    }
};
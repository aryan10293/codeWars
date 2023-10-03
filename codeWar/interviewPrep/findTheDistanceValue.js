var findTheDistanceValue = function(arr1, arr2, d) {
        let answer = 0
        for(let i = 0; i<arr1.length; i++){
        let count = false
           for(let j = 0; j<arr2.length; j++) {
               if(Math.abs(arr1[i] - arr2[j]) <= d){
                   count = true
                   break
               }
           }
           if (!count) answer++
        }
    return answer
};
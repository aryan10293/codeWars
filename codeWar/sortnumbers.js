function solution(nums){
  return nums === null || nums.length === 0 ? [] : nums.sort((a,b) => {return a-b})
}
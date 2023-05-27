var maxArea = function(height) {
    let heighest = 0
    let left = 0
    let right = height.length - 1
    while(left<right){
        const lol = (right-left)*Math.min(height[left], height[right])
        heighest = Math.max(heighest, lol)
        if(height[left] > height[right]){
            right-=1
        } else {
            left+=1
        }
    }
    return heighest
};
var maxArea = function(height) {
    // the following varible is to determien the area of the water in the con tainer it will be returned at the end 
    let heighest = 0
    //im going to get the arera of the container based on the ;eft and right indexes of the array
    let left = 0
    let right = height.length - 1
    // im going to run a loop while the left index if less than the right run the following algorithm 
    while(left<right){
        // the lol varible is to determine the current area/heighest of the container 
        // we are going to get the difference between theright and the left value 
        // and times it by the lowest element from from height left and height right  
        const lol = (right-left)*Math.min(height[left], height[right])
        // then we reset the heighest var to the lol if its smaller than lol
        heighest = Math.max(heighest, lol)
        // then this conditional is the check if in the array height left is greater than height right 
        // right --
            // else
        //left --

        // we do this conditon to move to indexes of the array accoringly 
        if(height[left] > height[right]){
            right-=1
        } else {
            left+=1
        }
    }
    return heighest
};
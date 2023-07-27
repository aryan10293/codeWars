var canFinish = function(numCourses, prerequisites) {
    console.log(prerequisites.length)
    if(prerequisites.length === 1 ) return true
    for(let i = 0; i < prerequisites.length; i++){
        let lol = prerequisites[i]
        if(lol[0]< lol[1]){
            return false
        }
    }
    return true
    // this is so wrong
};
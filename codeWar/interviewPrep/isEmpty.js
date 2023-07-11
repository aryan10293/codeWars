var isEmpty = function(obj) {
    const lol =  obj.length ?? false 
    console.log(lol)
    if(lol){
        if(lol > 0){
            return false
        } else {
            return true
        }
    } else {
        if(Object.keys(obj).length > 0){
             return false
        } else {
            return true
        }
    }
};
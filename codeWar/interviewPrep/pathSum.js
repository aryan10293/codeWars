var hasPathSum = function(root, targetSum) {
    // obviuosly divide and conquer
    // if left and right === null
    // howe tf am i going to keep track of this number

    // const imLost = (num, left,right) => {
    //     const number = 0 // for sake of visuals
    //     if(!left && !right && num === targetSum) return true
    //     if(!left && !right && num !== targetSum) return false
    //     if(num > targetSum) return false
    //     return imLost(num+=left.val, left.left, left.right) || imLost(num+=right.val, right.left, right.right)
    // }

    // return imLost(root.val, root.left, root.right)
    let cool = 0
    let path = false
    const imLost = (node, number) => {
        if(!node) return 
        
        number += node.val

        if(!node.left && !node.right && number === targetSum){
            path = true
            return
        }
        imLost(node.left, number)
        imLost(node.right, number)

    }
    imLost(root, cool)
    return path
};

// nah this one hard asf fuck right here

var hasPathSum = function(root, targetSum) {
    // obviuosly divide and conquer
    // if left and right === null
    // howe tf am i going to keep track of this number

    // const imLost = (num, left,right) => {
    //     const number = 0 // for sake of visuals
    //     if(!left && !right && num === targetSum) return true
    //     if(!left && !right && num !== targetSum) return false
    //     if(num > targetSum) return false
    //     return imLost(num+=left.val, left.left, left.right) || imLost(num+=right.val, right.left, right.right)
    // }

    // return imLost(root.val, root.left, root.right)

    let path = false
    let imCooked = (node, num) => {
        if(!node) return

        num += node.val

        if(!node.left && !node.right && num === targetSum){
            path = true
            return
        }
        imCooked(node.left, num)
        imCooked(node.right, num)
    }
    imCooked(root, 0)
    return path 
};
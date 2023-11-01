var isSymmetric = function(root) {
    // if(root.left === null && root.right == null) return true
    // if(root.right === null || root.left === null) return false
    // if(root.right !== root.left) return false
    // you have ti break this down into 2 sides duhh....
    // kind like 
    // if right !== left return false
    // if right.right !== left.left return false 
    // if right.left !== left.right return false
    // if root.left !== root.right reutrn false
    const recurse = (left, right) => {
        if(left === null && right === null) return true
        if(left === null || right === null || right.val !== left.val) return false
        // if(right.val !== left.val) return false

        return recurse(left.left, right.right) && recurse(left.right, right.left)
    }


    return recurse(root.left,root.right)
};
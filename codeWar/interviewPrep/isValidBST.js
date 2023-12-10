var isValidBST = function(root) {
    let isValid = true
    const idk = (node, side) => {
        if(!node ) return 
        if(node.left && node.left.val >= node.val) isValid = false
        if(node.right && node.right.val <= node.val) isValid = false
        if(node.left && side === 'right' && node.left.val <= root.val) isValid = false
        if(node.right && side === 'left' && node.right.val >= root.val) isValid = false
        idk(node.left, 'left')
        idk(node.right, 'right')
    }
    idk(root)
    return isValid
};

// below is the correct code

var isValidBST = function(root) {
    const idk = (node, min, max) => {
        if(!node) return true

        if(node.val >= max || node.val <= min) return false

        return idk(node.left, min, node.val) && idk(node.right, node.val, max)
    }
    idk(root, -infinity, infinty)
}
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
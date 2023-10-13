var maxDepth = function(root) {
    let max = 0
    function idk(node, level){
        if(node === null) return
        if(level > max) max = level

        idk(node.right, level + 1)
        idk(node.left, level+1)
    }
    idk(root,1)
    return max
};
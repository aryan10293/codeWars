const maxDepth = (root) => {
    let count = 0
    let maxCount = (node, level) => {
        if(!node) return null
        if(level > count) count = level
        
        maxCount(node.left, level+1)
        maxCount(node.right, level+1)
    }
    maxCount(root, 1)
    return count
}
// understand question and code not that hard to implement
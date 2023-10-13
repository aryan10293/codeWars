const maxDepth = (root) => {
    let count = 0
    const idk = (node, level) => {
        if(node === null) return 

        if(level > count) count = level
        idk(node.left, level + 1)
        idk(node.right, level + 1)
    }
    idk(root, 1)
    return count
}
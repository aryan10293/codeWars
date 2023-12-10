var kthSmallest = function(root, k) {
    let arr = []
    let getNode = (nodes) => {
        if(!nodes) return

        arr.push(nodes.val)
        getNode(nodes.right)
        getNode(nodes.left)
    }
    getNode(root)
    arr =  arr.sort((a,b) => a-b)

    return arr[k-1]
};
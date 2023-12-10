var countNodes = function(root) {
    let count = 1
    let idk = (root) => {
        if(root === null) return root
        count++
        idk(root.left)
        idk(root.right)
    }
    if(!root) return 0
     idk(root.left)
     idk(root.right)

  return count
};

// this one is hella easy

var countNodes = function(root) {
    let count = 0
    let countNodes = (node) => {
        if(!node) return
        count++
        countNodes(node.right)
        countNodes(node.left)
    }

    countNodes(root)
    return count 
};
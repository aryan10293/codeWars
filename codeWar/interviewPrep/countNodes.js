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
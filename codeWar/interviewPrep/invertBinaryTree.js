var invertTree = function(root) {
  if(root === null) return root
  let temp = root.right
  root.right = root.left
  root.left = temp
  invertTree(root.left)
  invertTree(root.right)

  return root
};

// i think this one is easy idk though

var invertTree = function(root) {
    if(!root) return null
    let left = root.left
    root.left = root.right
    root.right = left
    invertTree(root.right)
    invertTree(root.left)
  return root
};
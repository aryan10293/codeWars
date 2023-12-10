var getMinimumDifference = function(root) {
    let arr = []
    let number = Infinity
    let getNode = (nodes) => {
        if(!nodes) return

        arr.push(nodes.val)
        getNode(nodes.right)
        getNode(nodes.left)
    }
    getNode(root)
    arr =  arr.sort((a,b) => a-b)
    for(let i = 0; i<arr.length; i++){
        let current = arr[i+1] - arr[i]
        if(current < number) number = current
    }
    return number

};
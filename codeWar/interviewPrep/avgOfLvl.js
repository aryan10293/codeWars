var averageOfLevels = function  (root) {
    if (root === null) return [];

    let result = [];
    let temp = [root];
    while  (temp.length ) {
        let newTemp = [];
        let sum = 0;
        let count = 0;
        for  (let node of temp ) {
            if  (node.right) newTemp.push(node.right);
            if  (node.left) newTemp.push(node.left);
            um  +=  node.val;
            ount++;
        }
        result.push(sum / count);
        temp = newTemp;
    }
    return result;
};
/*
acyclic (false)
root = {
    b
    c: {
        d: {e}
    }
}
to_visit = []
visited_nodes = [root.is_object = true, b, c, d, e]
curr_node, this_node

cyclic (true)
root = {
    b
    c: {
        n: {
            e: {
                e
            }
            }
    }
    n: {
        l: {
            
        }
    }
}
a
a.b
a.c = {d}


object.children() -> []
root.children -> [b, c, n]

cyclic
a: {a}
*/
// root = {
//     b
//     c: {
//         d: {e}
//     }
// }
function isCyclic(rootNode) {
    let visited = []         // [rootNode, c , d, b]
    let toVisit = [rootNode] // []
    while (toVisit.length !== 0) {
        let thisNode = toVisit.pop() // c // d // b
        if (visited.includes(thisNode)) return true
        visited.push(thisNode)
        let children = Object.keys(thisNode) // [d] // [e] // [] // []
        toVisit.concat(children)
    }
    return 0
}
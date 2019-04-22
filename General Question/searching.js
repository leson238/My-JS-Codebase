//Breadth First Search - BFS - Shortest Path 
//Weighted path graph - If there arent negatives : Dijkstra; If there are: Bellman - Ford;
const breadthFirstSearch = () => {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode)//Memory consumption maybe a thing
    while (queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list
}

const recursiveBFS = (queue, list) => {
    if (queue.length !== 0) {
        return list
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
        queue.push(currentNode.left);
    }
    if (currentNode.right) {
        queue.push(currentNode.right);
    }
    return recursiveBFS(queue, list)
}
//Easy to implement and understand

/*------------------------------------------------------------------
            **************************************** 
------------------------------------------------------------------*/

//Depth First Search
const depthFirstSearchInOrder = () => {
    return traverseInOrder(this.root, [])
}
const depthFirstSearcPreOrder = () => {
    return traversePreOrder(this.root, [])
}
const depthFirstSearchPostOrder = () => {
    return traverseInPostOrder(this.root, [])
}
const traverseInOrder = (node, list) => {
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value) //Only this line position matter in ordering DFS!!! And its name represents its positions.
    if (node.right) {
        traverseInOrder(node.right, list)
    }
    return list
}
const traversePreOrder = (node, list) => {
    list.push(node.value) //Only this line position matter in ordering DFS!!! And its name represents its positions.
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    if (node.right) {
        traverseInOrder(node.right, list)
    }
    return list
}
const traverseInPostOrder = (node, list) => {
    if (node.left) {
        traverseInOrder(node.left, list)
    }
    if (node.right) {
        traverseInOrder(node.right, list)
    }
    list.push(node.value) //Only this line position matter in ordering DFS!!! And its name represents its positions.
    return list
}
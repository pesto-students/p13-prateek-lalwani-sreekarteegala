/**
 * Level Order Traversal Mechanish is used to find all leaf nodes
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.next = null;
        this.left = left || null;
        this.right = right || null;
    }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.right = new TreeNode(6);

function levelOrder(tree) {
    if (!tree) {
        return 0;
    }

    let queue = [tree];
    let leafs = 0;

    while (queue.length > 0) {
        let root = queue.shift();
        if (!root.left && !root.right)
            leafs++;

        if (root.left) {
            queue.push(root.left)
        }

        if (root.right) {
            queue.push(root.right)
        }
    }

    return leafs;
}

console.log(levelOrder(tree))
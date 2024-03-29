function calculateHeight(root) {
    if (!root) {
        return 0;
    }

    let LH = calculateHeight(root.left)
    let RH = calculateHeight(root.right)

    return Math.max(LH, RH) + 1;
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)
tree.right.left.right = new TreeNode(16)

console.log(calculateHeight(tree))
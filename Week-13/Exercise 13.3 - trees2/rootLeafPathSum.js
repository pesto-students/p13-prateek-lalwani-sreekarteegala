
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
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

function rootLeafPathSum(root, k) {

    if (root == null) {
        return false
    }

    if (root.left == null && root.right == null) {
        return k == root.val;
    }

    k = k - root.val;
    let LH = rootLeafPathSum(root.left, k);
    let RH = rootLeafPathSum(root.right, k)

    return LH || RH
}

console.log("Output:", rootLeafPathSum(tree, 12))
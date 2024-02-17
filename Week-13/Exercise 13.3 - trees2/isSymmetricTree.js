class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

/** 
 * If tree is cut at root node and the two parts of tree are queal in terms of nodes and values,
 * Then that type of tree is called as Symmetric tree
*/
function checkSymmetry(root1, root2) {
    if (root1 == null && root2 == null) {
        return true
    }

    if (root1 == null || root2 == null) {
        return false
    }

    if (root1.val != root2.val) {
        return false
    }

    let left = checkSymmetry(root1.left, root2.left);
    let right = checkSymmetry(root1.right, root2.right);

    return left && right;
}

function isSymmetric(root) {
    return checkSymmetry(root.left, root.right)
}


const tree = new TreeNode(0);
tree.left = new TreeNode(1);
tree.right = new TreeNode(1);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(2);
tree.right.right = new TreeNode(3);


console.log(isSymmetric(tree))
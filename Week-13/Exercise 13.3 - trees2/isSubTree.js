class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}


const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);


const tree2 = new TreeNode(2);
tree2.left = new TreeNode(4);
tree2.right = new TreeNode(5);

/**
 * 
 * @returns Boolean(true/false)
 * Check weather tree2 is a subtree of tree1
 */
function isSymmetrical(root1, root2) {
    if (root1 == null && root2 == null) {
        return true
    }

    if (root1 == null || root2 == null) {
        return false
    }

    if (root1.val != root2.val) {
        return false;
    }

    return isSymmetrical(root1.left, root2.left) && isSymmetrical(root1.right, root2.right);
}

function subTree(tree1, tree2) {

    if(tree2 ==null){
        return true;
    }

    if (tree1 == null) {
        return false
    }

    if (isSymmetrical(tree1, tree2)) {
        return true;
    }

    return subTree(tree1.left, tree2) || subTree(tree1.right, tree2)
}

console.log(subTree(tree, tree2))

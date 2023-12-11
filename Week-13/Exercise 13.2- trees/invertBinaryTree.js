
class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}


function invertTree(root) {

    if(root==null){
        return root;
    }

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

function inOrder(root){
    if(root==null){
        return;
    }

    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

const tree = new TreeNode(4);
tree.left =  new TreeNode(2);
tree.right =  new TreeNode(7);
tree.left.left =  new TreeNode(1);
tree.left.right =  new TreeNode(3);
tree.right.left =  new TreeNode(6);
tree.right.right =  new TreeNode(9);

console.log(inOrder(invertTree(tree)))
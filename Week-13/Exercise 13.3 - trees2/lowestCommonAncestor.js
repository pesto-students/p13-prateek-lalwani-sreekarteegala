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
tree.right.right = new TreeNode(7);

let path1 = [];
let path2 = [];

function findPath(root, k, path) {
    if (root == null) {
        return false;
    }

    path.push(root.val);

    if (root.val == k) {
        return true
    }

    if (findPath(root.left, k, path)) {
        return true;
    }

    if (findPath(root.right, k, path)) {
        return true;
    }

    path.pop();

    return false;

}

function LCA(n, m) {
    path1 = [];
    path2 = [];

    let nPath = findPath(tree, n, path1);
    let mPath = findPath(tree, m, path2);

    if (!nPath && !mPath) {
        return "elements notfound"
    }
    let i = 0;
    while (path1.length > 0 && path2.length > 0) {
        if (path1[i] != path2[i]) {
            break;
        }
        i++;
    }

    return path1[i - 1]
}

console.log(LCA(2, 7));
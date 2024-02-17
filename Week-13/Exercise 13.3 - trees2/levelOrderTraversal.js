class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.left.left = new TreeNode(10);
tree.left.right = new TreeNode(11);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);


function levelOrder(root) {
    let queue = [root];
    let res = [];

    while (queue.length > 0) {
        let queueLen = queue.length;
        let arr = [];

        for (let i = 0; i < queueLen; i++) {
            let curr = queue.shift();
            arr.push(curr.val);

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }

        res.push(arr)
    }

    console.log(res);
}

levelOrder(tree)
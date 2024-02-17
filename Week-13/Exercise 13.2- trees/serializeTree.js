/**
Problem Statement:
Serialize Binary Tree

Problem Statement:
Write a function to serialize a binary tree into a string representation.

Input Format:
The input for the serialization function is a binary tree represented by its root node. The elements of the binary tree will be provided as a space-separated string.

Output Format:
The serialization function should return a string representation of the binary tree.

Test Case 1:
Sample Input: 1
Sample Output: 1

Test Case 2:
sample input: 1 2 null null null
sample output: 2,1

Approach:
If the root is null, return an empty string.
Recursively serialize the left subtree and append it to the serialized string.
Recursively serialize the right subtree and append it to the serialized string.
Append the value of the root node to the serialized string.
Return the serialized string.
 */


class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

function preOrder(root, res = []){
    if(root == null){
        return res;
    }

    console.log(res, root.val)
    res.push(root.val);
    preOrder(root.left, res);
    preOrder(root.right, res);

    return res;
}

function serialize(root){
    let res = [];

    preOrder(root, res)

    return res.join(",")
}

const tree = new TreeNode(4);
tree.left =  new TreeNode(2);
tree.right =  new TreeNode(7);
tree.left.left =  new TreeNode(1);
tree.left.right =  new TreeNode(3);
tree.right.left =  new TreeNode(6);
tree.right.right =  new TreeNode(9);

console.log(preOrder(tree));
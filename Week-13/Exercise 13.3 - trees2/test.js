
// // // JavaScript Program for Lowest Common
// // // Ancestor in a Binary Tree
// // // A O(n) solution to find LCA of 
// // // two given values n1 and n2

// // class Node {
// //     constructor(value) {
// //         this.left = null;
// //         this.right = null;
// //         this.data = value;
// //     }
// // }

// // // let root;
// // // let path1 = [];
// // // let path2 = [];

// // // Finds the path from root node to given root of the tree.
// // function findLCA(n1, n2) {
// //     let path1 = [];
// //     let path2 = [];

// //     if (!findPath(root, n1, path1) || !findPath(root, n2, path2)) {
// //         console.log((path1.length > 0) ?
// //             "n1 is present" : "n1 is missing");
// //         console.log((path2.length > 0) ?
// //             "n2 is present" : "n2 is missing");
// //         return -1;
// //     }
// //     console.log(path1, path2)
// //     let i;
// //     for (i = 0; i < path1.length && i < path2.length; i++) {

// //         // System.out.println(path1.get(i) + " " + path2.get(i));
// //         if (path1[i] != path2[i])
// //             break;
// //     }

// //     return path1[i - 1];
// // }


// // // Finds the path from root node to 
// // // given root of the tree, Stores the
// // // path in a vector path[], returns true
// // // if path exists otherwise false
// // function findPath(root, n, path) {
// //     // base case
// //     if (root == null) {
// //         return false;
// //     }

// //     // Store this node . The node will be removed if
// //     // not in path from root to n.
// //     path.push(root.data);

// //     if (root.data == n) {
// //         return true;
// //     }

// //     if (findPath(root.left, n, path)) {
// //         return true;
// //     }

// //     if (findPath(root.right, n, path)) {
// //         return true;
// //     }

// //     // If not present in subtree rooted with root, 
// //     // remove root from
// //     // path[] and return false
// //     path.pop();

// //     return false;
// // }

// // let root = new Node(1);
// // root.left = new Node(2);
// // root.right = new Node(3);
// // root.left.left = new Node(4);
// // root.left.right = new Node(5);
// // root.right.left = new Node(6);
// // root.right.right = new Node(7);


// // console.log("LCA(4, 5) = " + findLCA(4, 5));
// // console.log("LCA(4, 6) = " + findLCA(4, 6));
// // console.log("LCA(3, 4) = " + findLCA(3, 4));
// // console.log("LCA(2, 4) = " + findLCA(2, 4));



// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//     let maxLen = -1;
//     let l = 0;
//     let r = 0;
//     let start
//     for (let i = 0; i < s.length; i++) {
//         l = i - 1;
//         r = i + 1;
//         let len = -1;

//         while (s[l] == s[r]) {
//             l--;
//             r++;
//         }
//         len = r - l - 1

//         if (maxLen < len) {
//             maxLen = Math.max(maxLen, len);
//             start = l + 1;
//         }
//     }

//     return s.slice(start, maxLen + start)
// };


// // console.log(longestPalindrome("babad"));


// /**
//  * @param {number[][]} points
//  * @param {number} k
//  * @return {number[][]}
//  */
// var kClosest = function (points, k) {
//     // let dist = new Array(points.length).fill(0);

//     let res = [];
//     let map = {};
//     let pointsSet = new Set();

//     for (let i = 0; i < points.length; i++) {
//         if (pointsSet.has(points)) {
//             continue
//         } else {
//             let x = points[i][0];
//             let y = points[i][1]
//             let d = Math.sqrt((x * x) + (y * y));

//             // dist[i] = d;
//             if (map[d]) {
//                 map[d + 0.1] = points[i];
//             } else
//                 map[d] = points[i];
//         }
//     }

//     console.log(map);
//     let dist = Object.keys(map);
//     dist = dist.sort((a, b) => a - b);

//     for (let i = 0; i < k; i++) {
//         res.push(map[dist[i]]);
//     }

//     return res;
// };

// // console.log(kClosest([[1, 3], [-2, 2]], 1));
// // console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
// // console.log(kClosest([[0, 1], [1, 0]], 2));
// console.log(kClosest([[2, 2], [2, 2], [2, 2], [1, 1]], 1));

var fname = "sreedhar"
let fname = "sreekar"

console.log(fname)
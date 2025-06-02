// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5



function ListNode(val,left=null,right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

const minimumDepthOfBinaryTree = (root) => {
 const queue = [{node:root, depth:1}];
 
 while(queue.length > 0) {
    const {node, depth} = queue.shift();

    if(!node.left && !node.right) return depth;
    if(node.left) queue.push({node:node.left, depth: depth + 1});
    if(node.rigth) queue.push({node:node.right, depth: depth + 1});
 } 
 return 0;
}

// using recursive way 

const minDepth = (root) => {
    if(!root) return 0;
    if(!root.left) return 1 + minDepth(root.right);
    if(!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));    
}


const root = new ListNode(3,new ListNode(9), new ListNode(20, new ListNode(15), new ListNode(7)));
const root1= new ListNode(2, null, new ListNode(3 , null, new ListNode(4, null, new ListNode(5, null, new ListNode(6)))));

console.log(minimumDepthOfBinaryTree(root));
console.log(minDepth(root1));

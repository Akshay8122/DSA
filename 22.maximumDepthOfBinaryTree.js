// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

 
function ListNode(val,left=null,right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function hasMaxDepth(root) {
    if(!root) return 0;
    let queue = [root];
    let depth = 0;

    while(queue.length > 0) {
        const size = queue.length;
        for(let i =0; i< size; i++){
          const node = queue.shift();
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
        depth++;
        
    }
    return depth;
}

// using recursive way 
function isMaxDepth(root) {
    if(!root) return 0;

 return 1 + Math.max(isMaxDepth(root.left), isMaxDepth(root.right));
}


let root = new ListNode(3, 
 new ListNode(9), new ListNode(20, new ListNode(15), new ListNode(7))
);

let root1 = new ListNode(1,null, new ListNode(2));

console.log(hasMaxDepth(root));
console.log(hasMaxDepth(root1))

console.log(isMaxDepth(root));
console.log(isMaxDepth(root1));


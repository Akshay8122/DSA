// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.   
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

 
 function ListNode(val, left=null,right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
 }

 function hasPathSum (root, targetSum) {
    if(!root) return false;

    if(!root.left && !root.right) {
        return root.val === targetSum;
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
 }


 const root = new ListNode(5,new ListNode(4, new ListNode(11, new ListNode(7), new ListNode(2))), new ListNode(8, new ListNode(13), new ListNode(4, null, new ListNode(1))));
 const target = 22;

 const root1 = new ListNode(1, new ListNode(2), new ListNode(3));
 const target1 = 5;

 const root2 = [];
 const target2 = 0;

 console.log(hasPathSum(root,target));
 console.log(hasPathSum(root1,target1));
 console.log(hasPathSum(root2, target2));
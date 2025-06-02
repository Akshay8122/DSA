// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100


function ListNode(val,left=null,right=null) {
    this.val = val;
    this.right =right;
    this.left = left;
 }

 function binaryTreePath(root) {
     const result = [];
    
     function dfs(node,path) {
      if(!node) return;

      if(!node.left && !node.right) {
        result.push(path);
        return;
      }
       
      if(node.left) {
        dfs(node.left, path + "->" + node.left.val)
      }

      if(node.right) {
        dfs(node.right, path + "->" + node.right.val)
      }

    }
    if(root) {
        dfs(root, root.val.toString());
    }
    return result;
 }


 const root = new ListNode(1, new ListNode(2, null, new ListNode(5)), new ListNode(3));

 console.log(binaryTreePath(root));


const root1 = new ListNode(1);

console.log(binaryTreePath(root1));
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false 
 
 function ListNode(val,left=null,right=null){
    this.val = val;
    this.left = left;
    this.right = right;
 }


 function isSameTree(p,q) {
    if(!p && !q) return true; // both tree are null 
    if(!p || !q) return false; // if any one null
    if(p.val !== q.val) return false; // if any tree value doesn't match;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
 }

 const root1 = new ListNode(1,new ListNode(2), new ListNode(3));
 const root2 = new ListNode(1,new ListNode(2), new ListNode(3));

 const root3 = new ListNode(1,new ListNode(2));
 const root4 = new ListNode(1, null, new ListNode(2));

 console.log(isSameTree(root1,root2));

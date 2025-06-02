function ListNode(val,left=null,right=null) {
    this.val = val;
    this.right =right;
    this.left = left;
 }

 function mergeTrees(root1,root2) {
  if(root1 === null) return root2;
  if(root2 === null) return root1;
 
  let merged = new ListNode(root1.val + root2.val);
  merged.left = mergeTrees(root1.left, root2.left);
  merged.right = mergeTrees(root1.right,root2.right);

  return merged;
 }


 const root1 = new ListNode(1,new ListNode(3, new ListNode(5)),new ListNode(2));
 const root2 = new ListNode(2, new ListNode(1, null, new ListNode(4)), new ListNode(3, null, new ListNode(7)));


console.log(mergeTrees(root1,root2));
  
   
          
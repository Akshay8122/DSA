 
 function ListNode(val,left=null,right=null) {
    this.val = val;
    this.right =right;
    this.left = left;
 }

 function diaMeterOfBinaryTree(root) {
    let diameter = 0;
    function depth(node) {
        if(!node) return 0;
       const left = depth(node.left);
       const right = depth(node.right);

       diameter = Math.max(diameter, left + right);
       return 1 + Math.max(left, right);
    }
    depth(root);
    return diameter;
 }


 const root = new ListNode(1,new ListNode(2, new ListNode(4), new ListNode(5)), new ListNode(3));
 const root1 = new ListNode(1, new ListNode(2));
 console.log(diaMeterOfBinaryTree(root));
 console.log(diaMeterOfBinaryTree(root1));

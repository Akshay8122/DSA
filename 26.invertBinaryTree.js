function ListNode(val,left=null,right=null) {
    this.val = val;
    this.right =right;
    this.left = left;
 }


function inVertBinaryTree  (root)  {
    if(!root) return null;

    let temp = root.left;
    root.left = inVertBinaryTree(root.right);
    root.right = inVertBinaryTree(temp);

    return root;
}

let root = new ListNode(4, new ListNode(2,new ListNode(1), new ListNode(3)),new ListNode(7,new ListNode(6),new ListNode(9)));
console.log(inVertBinaryTree(root));

let root2 = new ListNode(2, new ListNode(1), new ListNode(3));
console.log(inVertBinaryTree(root2));
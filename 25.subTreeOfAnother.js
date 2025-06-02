function ListNode(val,left=null,right=null) {
    this.val = val;
    this.right =right;
    this.left = left;
 }

  
 function subTree(root,subRoot) {
    if(!root) return false;
    if(sameTree(root,subRoot)) return true;
    return subTree(root.left, subRoot) || subTree(root.right, subRoot); 
 }

 function sameTree(s,t) {
    if(!s && !t) return true;
    if (!s || !t || s.val !== t.val) return false;
    return sameTree(s.left, t.left) && sameTree(s.right, t.right) 
 }


 const root = new ListNode(3, new ListNode(4, new ListNode(1), new ListNode(2)), new ListNode(5));
 const subRoot = new ListNode(4, new ListNode(1), new ListNode(2));

 const root1 = new ListNode(3, new ListNode(4, new ListNode(1), new ListNode(2, new ListNode(0))), new ListNode(5));
 const subRoot1 = new ListNode(4, new ListNode(1), new ListNode(2));

 console.log(subTree(root,subRoot));
 console.log(subTree(root1,subRoot1));

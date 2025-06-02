// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false


function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function arrToList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function isPalindrome(head) {
  let stack = [];
  let current = head;

  while (current) {
    stack.push(current.val);
    current = current.next;
  }

  current = head;
  while (current) {
    if (current.val !== stack.pop()) {
      return false;
    }
    current = current.next;
  }
  return true;
}

let passArr = arrToList([1, 2, 2, 1]);
console.log(isPalindrome(passArr));

let passArr1 = arrToList([1, 2]);
console.log(isPalindrome(passArr1));

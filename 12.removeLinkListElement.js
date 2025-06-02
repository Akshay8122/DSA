// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

  // Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []



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

function updatedArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function removeLinkListEklement(head, val) {
  while (head !== null && head.val === val) {
    head = head.next;
  }

  let current = head;
  while (current !== null && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

let num = [1, 2, 3, 6, 4, 5, 6];
let removeNum = 6;
let numList = arrToList(num);
let updatedList = removeLinkListEklement(numList, removeNum);
console.log(updatedArray(updatedList));

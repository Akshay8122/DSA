// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

const middleNode = (head) => {
  //  leet code solutions
  //   let fast = head;
  //   let slow = head;

  //   while (fast && fast.next) {
  //     slow = slow.next;
  //     fast = fast?.next?.next;
  //   }

  //   return slow;

  // alternative solution

  let n = Math.floor(head.length / 2);
  return head.slice(n);
};

console.log(middleNode([1, 2, 3, 4, 5, 6]));

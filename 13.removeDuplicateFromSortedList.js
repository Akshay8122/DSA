// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]



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

  function removeDuplicateFromSortedList(head){
    let current = head;
    
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
  }


  let num = arrToList([1,2,3,3,4,4]);
  let updatedList = removeDuplicateFromSortedList(num);
 console.log(updatedArray(updatedList));



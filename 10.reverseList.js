const reverseList = (head) => {
  //using js reverse method
  // return head.reverse();  => JS

  // link list way

  let prev = null;
  let current = head;

  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};

console.log(reverseList([1, 2, 3, 4, 5, 6]));

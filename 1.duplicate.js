// Defination - Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (num) => {
  // Set is used because it only stores unique values. If you try to add a value that already exists in the Set, it will not create a duplicate
  let seen = new Set();
  for (i = 0; i < num.length; i++) {
    if (seen.has(num[i])) {
      console.log("element is not distinct");
      return true;
    }
    seen.add(num[i]);
  }
  console.log("element is distinct");
  return false;
};

let num = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
containsDuplicate(num);

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

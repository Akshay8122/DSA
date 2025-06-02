// Defination - Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Solution Explanation:

// logic:  sum = n * (n+1) / 2 formula & reduce method in javascript

const missingNumber = (nums) => {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
};

// Example Usage:
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(missingNumber(nums)); // Output: 2

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

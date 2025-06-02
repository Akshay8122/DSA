// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)



function productOfArrayAcceptItself(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let leftElement = 1;
  for(let i = 0; i < n; i++) {
    answer[i] = leftElement;
    leftElement *= nums[i];
  }

  let rightElement = 1;
  for(let i = n - 1; i >= 0; i--){
    answer[i] *= rightElement;
    rightElement *= nums[i]; 
  }
  return answer;
}


const nums = [1,2,3,4];

console.log(productOfArrayAcceptItself(nums));

const nums1 = [-1,1,0,-3,3]

console.log(productOfArrayAcceptItself(nums1));

// Explanation

// 🔧 Step 1: Initialize
// javascript
// Copy
// Edit
// const n = nums.length;
// const answer = new Array(n).fill(1);
// We create an array answer of the same length as nums and fill it with 1s.

// This will store the final result.

// At this point:

// javascript
// Copy
// Edit
// answer = [1, 1, 1, 1]
// 🔄 Step 2: First Pass (Left to Right)
// javascript
// Copy
// Edit
// let leftProduct = 1;
// for (let i = 0; i < n; i++) {
//     answer[i] = leftProduct;
//     leftProduct *= nums[i];
// }
// We're calculating the product of all elements to the left of each index.

// We use leftProduct to accumulate the product as we move from left to right.

// Iteration-by-iteration:

// i	leftProduct	answer[i] (before update)	nums[i]	answer[i] (after update)	leftProduct (after update)
// 0	1	1	1	1	1 * 1 = 1
// 1	1	1	2	1	1 * 2 = 2
// 2	2	1	3	2	2 * 3 = 6
// 3	6	1	4	6	6 * 4 = 24

// After this pass:

// javascript
// Copy
// Edit
// answer = [1, 1, 2, 6]
// Each element now contains the product of elements to the left of that index.

// 🔁 Step 3: Second Pass (Right to Left)
// javascript
// Copy
// Edit
// let rightProduct = 1;
// for (let i = n - 1; i >= 0; i--) {
//     answer[i] *= rightProduct;
//     rightProduct *= nums[i];
// }
// Now we're calculating the product of elements to the right of each index.

// Multiply that with the value already in answer (which holds the left products).

// Iteration-by-iteration:

// i	rightProduct	answer[i] (before)	nums[i]	answer[i] (after)	rightProduct (after)
// 3	1	6	4	6 * 1 = 6	1 * 4 = 4
// 2	4	2	3	2 * 4 = 8	4 * 3 = 12
// 1	12	1	2	1 * 12 = 12	12 * 2 = 24
// 0	24	1	1	1 * 24 = 24	24 * 1 = 24

// Final answer:

// javascript
// Copy
// Edit
// answer = [24, 12, 8, 6]
// ✅ Output
// This is the expected result:

// For nums[0] (1): product of [2, 3, 4] → 24

// For nums[1] (2): product of [1, 3, 4] → 12

// For nums[2] (3): product of [1, 2, 4] → 8

// For nums[3] (4): product of [1, 2, 3] → 6


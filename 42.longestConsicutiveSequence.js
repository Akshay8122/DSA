// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


 function longestSequence(nums) {
   // check first nums length
   if (nums.length === 0) return 0;

   // intialize longestStreak & numSet
   let numSet = new Set(nums);
   let longestStreak = 0;

   // itreat it through a loop
   for (let num of numSet) {
     // check it if start of the sequence
     if (!numSet.has(num - 1)) {
       let currentNum = num;
       let currentStreak = 1;

       // check for the next sequence
       while (numSet.has(currentNum + 1)) {
         currentNum += 1;
         currentStreak += 1;
       }
       longestStreak = Math.max(longestStreak, currentStreak);
     }
   }
   return longestStreak;
 }

 const nums = [100,4,200,1,3,2];
 console.log(longestSequence(nums));
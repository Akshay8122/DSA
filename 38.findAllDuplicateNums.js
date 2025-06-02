// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.


function findDuplicate(nums) {
   let result = [];

   for(let i =0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if(nums[index] < 0) {
        result.push(index + 1);
    }else {
        nums[index]  = -nums[index];
    }
   }
   return result;
}

const nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicate(nums));


// Iteration 1: i = 0 → nums[0] = 4 → index = 3
// nums[3] = 7 → not negative → mark as seen → make nums[3] = -7

// Iteration 2: i = 1 → nums[1] = 3 → index = 2
// nums[2] = 2 → mark as seen → nums[2] = -2

// Iteration 3: i = 2 → nums[2] = -2 → index = 1
// nums[1] = 3 → mark as seen → nums[1] = -3

// Iteration 4: i = 3 → nums[3] = -7 → index = 6
// nums[6] = 3 → mark as seen → nums[6] = -3

// Iteration 5: i = 4 → nums[4] = 8 → index = 7
// nums[7] = 1 → mark as seen → nums[7] = -1

// Iteration 6: i = 5 → nums[5] = 2 → index = 1
// nums[1] = -3 → already negative → duplicate! → push 2

// Iteration 7: i = 6 → nums[6] = -3 → index = 2
// nums[2] = -2 → already negative → duplicate! → push 3

// Iteration 8: i = 7 → nums[7] = -1 → index = 0
// nums[0] = 4 → mark as seen → nums[0] = -4
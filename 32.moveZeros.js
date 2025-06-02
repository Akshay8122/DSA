// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 




  function moveZeroes(nums) {
    
    let count = 0;
    // move all non-zero element to first place
      
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }

    // move all zero element at last

    while(count < nums.length) {
        nums[count] = 0;
        count++;
    }
}


let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]


let nums1 = [0];
moveZeroes(nums1);
console.log(nums1); // Output: [0]

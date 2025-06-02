// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
  
function twoSum(nums, target) {
   const map = {} // emmpty object

   // as first iteration  i=7;
   //complement  =  9 - 2 = 7
   // check if 7 exists in map {} no, so we store {0: 2}

   // continue with another iteration i = 7;
   // complement = 9 - 7 = 2;
   // check if 2 is exists in map => yes 
   // we return nums[0] + nums[1] 

    
   for(let i = 0; i < nums.length; i++) {
    const complement  = target - nums[i];
    if(map.hasOwnProperty(complement)){
        return [map[complement], i];
    }
     map[nums[i]] = i;
   }
}

// another way 

//  function twoSum(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
//  }
  

 
  const nums = [2,7,11,5];
  const target = 9;
  
  const nums1 = [3,2,4];
  const target1 = 6;

  const nums2 = [3,3];
  const target2 = 6;
 
  console.log(twoSum(nums,target));
  console.log(twoSum(nums1,target1));
  console.log(twoSum(nums2,target2));

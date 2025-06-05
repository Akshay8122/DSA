
// 90. Subsets II - // Medium


// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10


function subSetWithDup(nums){
  nums.sort((a,b) => a  - b);
  let result = [];
  
  const backTrack = (start,path) => {
    result.push([...path]);

    for(let i = start; i < nums.length; i++) {
        if(i > start && nums[i] === nums[i - 1]) continue;
         
        path.push(nums[i]);
        backTrack(i + 1, path);
        path.pop();
    }
  }
  backTrack(0, []);
 return result;
}

const nums = [1,2,2];
console.log(subSetWithDup(nums));

const nums1 = [0];
console.log(subSetWithDup(nums1));
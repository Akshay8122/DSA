// 78. Subsets - // Medium


// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.


 function subSets(nums) {
    let res = [];
    
    const backtrack = (start,currentSubset) => {
        res.push([...currentSubset]);

        for(let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    backtrack(0,[]);
    return res;
 }


 const nums = [1,2,3];

 const nums1 = [0];

 console.log(subSets(nums));

 console.log(subSets(nums1));
 

//  Let's go through the example nums = [1, 2, 3].
// We start with the initial call backTrack(0, []), meaning:

// start = 0, subset = [].
// At this point, we add [] to res.

// Now, we enter the loop:
// For i = 0, we add 1 to subset. Now subset = [1].

// We then call backTrack(1, [1]), which will explore all subsets starting from index 1.
// In this recursive call:
// start = 1, subset = [1].

// We add [1] to res.
// For i = 1, we add 2 to subset, so now subset = [1, 2].
// We then call backTrack(2, [1, 2]).

// In the next recursive call:
// start = 2, subset = [1, 2].
// We add [1, 2] to res.

// For i = 2, we add 3 to subset, so now subset = [1, 2, 3].
// We call backTrack(3, [1, 2, 3]).

// In the next recursive call:
// start = 3, subset = [1, 2, 3].
// We add [1, 2, 3] to res.
// Now, since start = 3 is beyond the length of nums, we return from this recursive call.

// Now, we backtrack:
// We pop the last element (i.e., 3), so subset = [1, 2].
// The loop finishes for i = 2, and we return to the previous call where subset = [1].
// We backtrack again:

// We pop the last element (i.e., 2), so subset = [1].
// The loop for i = 1 finishes, and we return to the top-level call where subset = [].
// We continue exploring the other possible subsets:

// For i = 1, we add 2 to subset, so now subset = [2].
// We then call backTrack(2, [2]), which will generate subsets starting from index 2.
// We continue recursively until all subsets are generated.

// Final Output for nums = [1, 2, 3]:
// The result stored in res will be:
// [[], [1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]
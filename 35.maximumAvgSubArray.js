// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104


function maximumAvgSubArray(nums, k) {
   
    let windowSum = 0;
    // first we calculate sum of k elements 
    for(let i = 0; i < k; i++) {
     windowSum += nums[i];
    }
   // Initialize maxsum with sum of window
    let maxSum = windowSum;

    // Sliding window from k element to end of arrray
    for(let i = k; i < nums.length; i++) {
        // Remove the element to popout from window & add new 
        windowSum = windowSum - nums[i - k] + nums[i];
       // check maxSum is greater or not
        if(windowSum > maxSum) {
            maxSum = windowSum;
        }
    }
    return maxSum / k;
}

const nums = [1,12,-5,-6,50,3];
const k = 4;

console.log(maximumAvgSubArray(nums,k));

const nums1 = [5];
const k1 = 1;

console.log(maximumAvgSubArray(nums1,k1));


 // Approach 

//  If you calculate the sum of every subarray of length k using a nested loop, you'd get a time complexity of O(n * k), which is too slow for large arrays (up to 10⁵ elements).

// Instead, with a sliding window, we:

// Compute the first k elements' sum.

// Then for each next subarray, subtract the element going out of the window and add the new one coming in — in constant time.

// This reduces the time complexity to O(n). Efficient and elegant!


// STEP BY STEP


// nums = [1,12,-5,-6,50,3], k = 4
// First k = 4 elements: [1,12,-5,-6]

// sum = 1+12+(-5)+(-6) = 2

// maxSum = 2

// Slide window:

// Remove 1, add 50 → sum = 2 - 1 + 50 = 51

// maxSum = max(2, 51) = 51

// Slide again:

// Remove 12, add 3 → sum = 51 - 12 + 3 = 42

// maxSum = max(51, 42) = 51

// Final answer: maxSum / k = 51 / 4 = 12.75

// ✅
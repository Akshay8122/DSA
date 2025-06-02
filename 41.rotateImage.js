// 48. Rotate Image
// Solved
// Medium
// Topics
// premium lock icon
// Companies

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000
   
  
function rotateImage(matrix) {
    // step 1- check length
   let n = matrix.length;
   
   // step - 2 transpose the matrix
   for(let i = 0; i< n; i++) {
       for(let j = i + 1; j < n; j++) {
           [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
       }
   }
    // step - 3 reverse each row in matrix
   for(let row of matrix){
       row.reverse();
   }
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotateImage(matrix));
console.log(matrix);


// Step-by-step Explanation
// 🧠 Step 1: Get the size of the matrix
// js
// Copy
// Edit
// let n = matrix.length; // n = 3
// This matrix is 3x3.

// 🔁 Step 2: Transpose the matrix
// Transposing means converting rows to columns:

// matrix[i][j] becomes matrix[j][i]

// We only swap elements above the diagonal (to avoid double-swapping).

// Code:

// js
// Copy
// Edit
// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
// }
// Let’s see the intermediate steps:

// Before transpose:
// csharp
// Copy
// Edit
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]
// Swaps:
// Swap (0,1) with (1,0): 2 ↔ 4

// Swap (0,2) with (2,0): 3 ↔ 7

// Swap (1,2) with (2,1): 6 ↔ 8

// After transpose:
// csharp
// Copy
// Edit
// [1, 4, 7]
// [2, 5, 8]
// [3, 6, 9]
// 🔁 Step 3: Reverse each row
// Now reverse every row:

// Before reversing rows:
// csharp
// Copy
// Edit
// [1, 4, 7]
// [2, 5, 8]
// [3, 6, 9]
// After reversing each row:

// csharp
// Copy
// Edit
// [7, 4, 1]
// [8, 5, 2]
// [9, 6, 3]
// ✅ Final Output
// js
// Copy
// Edit
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
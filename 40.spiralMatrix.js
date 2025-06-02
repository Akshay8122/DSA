// 54. Spiral Matrix
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100


function spiralMatrix(matrix) {
    //   step - 1 first need check wether matrix is available or not
          if(matrix.length === 0) return [];
         
    // step - 2 first remove first row of matrix
         let firstRow = matrix.shift();
         
    // step -3 transpose and reverse the array
       let rotate = matrix[0] ? matrix[0].map((_, i) => matrix.map(row => row[i])).reverse() : [];
         
     // step -4 now concat the firstRow & call recursive fn here & return it   
    
        return firstRow.concat(spiralMatrix(rotate));
    }
    
    
    
    const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    console.log(spiralMatrix(matrix));

    const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
    console.log(spiralMatrix(matrix1));


    // Step-by-step Execution:
    // Initial matrix:

    // [ [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9] ]
    // ➤ 1st Call:
    // firstRow = [1, 2, 3]
    
    // Remaining matrix:
    
   
    // [ [4, 5, 6],
    //   [7, 8, 9] ]
    // Transpose & reverse:
    
    // Transpose:
    
   
    // [ [4, 7],
    //   [5, 8],
    //   [6, 9] ]
    // Reverse:
    
   
    // [ [6, 9],
    //   [5, 8],
    //   [4, 7] ]
    // Call recursively with new matrix.
    
    // ➤ 2nd Call (Input: [[6, 9], [5, 8], [4, 7]]):
    // firstRow = [6, 9]
    
    // Remaining matrix:
    
   
    // [ [5, 8],
    //   [4, 7] ]
    // Transpose:
    
   
    // [ [5, 4],
    //   [8, 7] ]
    // Reverse:
    
   
    // [ [8, 7],
    //   [5, 4] ]
    // Call recursively with [[8, 7], [5, 4]]
    
    // ➤ 3rd Call (Input: [[8, 7], [5, 4]]):
    // firstRow = [8, 7]
    
    // Remaining matrix:
    
   
    // [ [5, 4] ]
    // Transpose:
    
   
    // [ [5],
    //   [4] ]
    // Reverse:
    
   
    // [ [4],
    //   [5] ]
    // Call recursively with [[4], [5]]
    
    // ➤ 4th Call (Input: [[4], [5]]):
    // firstRow = [4]
    
    // Remaining matrix:
    
   
    // [ [5] ]
    // Transpose:
    
   
    // [ [5] ]
    // Reverse:
    
   
    // [ [5] ]
    // Call recursively with [[5]]
    
    // ➤ 5th Call (Input: [[5]]):
    // firstRow = [5]
    
    // Remaining matrix: []
    
    // Recursive call with empty matrix returns []
    
    // Final Concatenation (Unwinding recursion):
    // diff
    // Copy
    // Edit
    // [1, 2, 3]
    // + [6, 9]
    // + [8, 7]
    // + [4]
    // + [5]
    // = [1, 2, 3, 6, 9, 8, 7, 4, 5]
    // ✅ Final Output:
    // js
    // Copy
    // Edit
    // [1, 2, 3, 6, 9, 8, 7, 4, 5]
    
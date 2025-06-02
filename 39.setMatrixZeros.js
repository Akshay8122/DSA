// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
  

  function matrixZeros(matrix) {
    let m = matrix.length, n = matrix[0].length, row0 = false, col0 = false;
    
    // Step 1: Check if the first column (col0) has any zeros
    for(let i = 0; i < m; i++) if(matrix[i][0] === 0) col0 = true;
    
    // Step 2: Check if the first row (row0) has any zeros
    for(let j = 0; j < n; j++) if(matrix[0][j] === 0) row0 = true;

      // Step 3: Use first row and first column as markers
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++) {
            if(matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
        }
    }
    
    // Step 4: Zero out cells based on markers in the first row and column
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
    }

       // Step 5: Zero out the first column & row if needed
    if(col0) for(let i = 0; i < m; i++) matrix[i][0] = 0;
    if (row0) for(let j = 0; j < n; j++) matrix[0][j] = 0;

  }

const matrix = [[1,1,1],[1,0,1],[1,1,1]];
matrixZeros(matrix);   // modifies matrix in place
console.log(matrix); // print the modified matrix


const matrix1 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
matrixZeros(matrix1);   // modifies matrix in place
console.log(matrix1); // print the modified matrix



// | Step                              | Matrix                         |
// | --------------------------------- | ------------------------------ |
// | Initial                           | 1 1 1<br>1 0 1<br>1 1 1        |
// | Step 1-2 (row0, col0)             | `row0 = false`, `col0 = false` |
// | Step 3 (marking)                  | 1 1 1<br>0 0 1<br>1 1 1        |
// | Step 4 (zeroing based on markers) | 1 0 1<br>0 0 0<br>1 0 1        |
// | Step 5-6 (row0, col0)             | no change                      |
// Result: [[1,0,1],[0,0,0],[1,0,1]]


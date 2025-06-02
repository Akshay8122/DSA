// Defination - You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// If you think about it, the problem resembles the Fibonacci sequence:
// To reach step n, you can either:
//     Come from step n-1 by taking 1 step.
//     Come from step n-2 by taking 2 steps.

// Therefore, the number of ways to reach step n is the sum of the ways to reach steps n-1 and n-2. This is exactly how the Fibonacci sequence works:

// f(n)=f(n−1)+f(n−2)

// Where:

// f(1) = 1
// f(2) = 2
// f(3) = 3
// f(4) = 5
// f(5) = 8

//Recursive approach
// const climbStairs = (n) => {
//   if (n <= 2) return n;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

// console.log(climbStairs(5)); // Output: 8

const climbStairs = (n) => {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
};

// Example Usage:
console.log(climbStairs(5)); // Output: 8

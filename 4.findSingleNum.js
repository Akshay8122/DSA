//  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.

const findSingleNum = (nums) => {
  // const n = nums.length;

  // for (let i = 0; i < n; i++) {
  //   let count = 0;

  //   for (let j = 0; j < n; j++) {
  //     if (nums[i] === nums[j]) {
  //       count++;
  //     }
  //   }

  //   if (count === 1) {
  //     return nums[i];
  //   }
  // }
  // return -1;

  //simple approach
  let ans = [];

  nums.map((item) => {
    ans.includes(item)
      ? (ans = ans.filter((newItem) => item !== newItem))
      : ans.push(item);
  });
  return ans[0];
};

const arr = [4, 1, 2, 1, 2];

console.log(findSingleNum(arr));

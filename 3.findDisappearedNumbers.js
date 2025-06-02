// Defination => Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

const findDisappearedNumbers = (nums) => {
  const n = nums.length;
  const numSet = new Set(nums);
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }
  return result;
};

const nums = [1, 1, 3];
console.log(findDisappearedNumbers(nums));

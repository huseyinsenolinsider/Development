/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

*/


const nums = [2, 2, 1];

const singleNumber = function (nums) {
    const numArr = [];
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        const index = numArr.indexOf(x);
        if (numArr.includes(x)) {
            numArr.splice(index, 1);
        } else {
            numArr.push(x);
        }
    }
    return numArr[0];
};

singleNumber(nums);

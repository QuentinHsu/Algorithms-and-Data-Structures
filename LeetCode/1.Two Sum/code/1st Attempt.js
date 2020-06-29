/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法
var twoSum = function(nums, target) {
    let difference = 0;
    for (let i = 0; i < nums.length; i ++) {
        difference = target - nums[i];
        for (let j = i + 1; j < nums.length; j ++) {
            if (nums[j] == difference) {
                return [i, j]
            }
        }
    }
    console.log("No two sum solution.")
};
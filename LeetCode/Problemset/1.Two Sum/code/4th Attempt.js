/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 一遍哈希表迭代
var twoSum = function(nums, target) {
    // 构造哈希表
    let map = new Map();
    for (let i = 0; i < nums.length; i ++) {
        let difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference), i];
        }
        map.set(nums[i], i);
    }
    console.log("No two sum solution.")
};
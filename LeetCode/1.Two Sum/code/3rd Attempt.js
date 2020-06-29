/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 两遍哈希表迭代
var twoSum = function(nums, target) {
    // 构造哈希表
    let map = new Map();
    for (let i = 0; i < nums.length; i ++) {
        map.set(nums[i], i);
    }
    for (let j = 0; j < nums.length; j ++) {
        let difference = target - nums[j];
        if (map.has(difference) && map.get(difference) !== j) {
            return [j, map.get(difference)]
        }
    }
    console.log("No two sum solution.")
};
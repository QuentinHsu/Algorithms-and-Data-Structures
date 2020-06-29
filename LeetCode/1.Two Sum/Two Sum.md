# Two Sum

## 题目

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## 题解

### 1st Attempt

```JavaScript
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
```


### 2nd Attempt

```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法-简化
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
            if (target - nums[i] === nums[j]) {
                return [i,j];
            }
        }
    }
    console.log("No two sum solution.")
};
```

### 3rd Attempt

使用 **哈希表** ，2 次

```JavaScript
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
```

#### 思路

第一次迭代，是为了构建哈希表：将每个元素的值和它的对应索引添加到表中。

第二次迭代，逐一检查每个元素对应的目标元素 `target - nums[i]` 是否存在于表中。并且，该目标元素不能等于 `nums[i]`。

### 4th Attempt

使用 **哈希表** ，1次

```JavaScript
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
```

#### 思路

在迭代时，做两件事情：
- 将每个元素的值和它对应的索引，逐一添加进表中。
- 接着，并查询表中是否已存在当前元素所对应的目标元素。
  - 若存在，就返回对应的 `[当前元素索引, 对应的目标元素索引]`
  - 若没有，就 Go ahead!

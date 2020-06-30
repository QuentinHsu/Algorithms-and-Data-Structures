# 3. Longest Substring Without Repeating Characters

## 题目

```
Given a string, find the length of the longest substring without repeating characters.
```

```
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

[LeetCode - Longest Substring Without Repeating Characters](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters)

## 题解

### 1st Attempt

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sArrOld = s.split('')
    for ( let i = 0; i < sArrOld.length; i ++ ) {
        let sArrNew = []
        if ( !sArrNew.find((n) => n = sArrOld[i]) ) {
            sArrNew.push(sArrOld[i])
        } else {
            return sArrNew.length;
        }
    }
};
```
**错误做法！！！**

### 2rd Attempt

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [], max = 0
    for(let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if(index !== -1) {
            arr.splice(0, index + 1);
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max)
    }
    return max
};
```

- 时间复杂度：O(n)
- 空间复杂度：O(n)

#### 思路

**滑动数组**

遍历字符串，判断当前的单个字符串是否在滑动窗口数组中

  - 若不在，则 push 进子串数组 arr 中
  - 若在，则
    - 删除当前子串数组中的 [ `arr[0]`, `arr[index]` ]
    - 并将当前单个字符串 `push` 进 子串数组 arr 中。
  - 然后，将 `max` 更新为当前的最长子串长度

遍历完，返回 max

相关 JavaScript 方法：

- [String.prototype.indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
  - 从字符串对象中返回 **首个** 被发现的给定值的索引值，如果没有找到则返回-1。
- [Array.prototype.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  - 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
- [String.prototype.charAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
  - 返回特定位置的字符。
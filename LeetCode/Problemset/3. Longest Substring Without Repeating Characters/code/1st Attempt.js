/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sArrOld = s.split('')
    let sArrNew = []
    for ( let i = 0; i < sArrOld.length; i ++ ) {
        if ( sArrNew.find((n) => n = sArrOld[i]) ) {
            console.log("进入 if 语句")
            sArrNew.push(sArrOld[i])
        } else {
            console.log("进入 else 语句")
            return sArrNew.length;
        }
    }
};
// 错误做法！！！

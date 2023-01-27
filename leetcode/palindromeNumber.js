/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let palindrome = `${x}`.split('').reverse().join('')
    return Number(palindrome) === x
};
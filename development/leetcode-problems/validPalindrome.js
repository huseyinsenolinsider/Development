/*
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */


const s = "A man, a plan, a canal: Panama";

const isPalindrome = function (s) {
    const newS = regex(s);
    const x = [...newS].reverse().join('');

    return x.toLowerCase() === newS.toLowerCase();
};

const regex = function (str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
};

isPalindrome(s);
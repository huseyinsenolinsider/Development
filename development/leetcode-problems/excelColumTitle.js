/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
*/

const columnNumber = 701;

const convertToTitle = function (columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--;
        let remain = columnNumber % 26;
        result = String.fromCharCode(65 + remain) + result;
        columnNumber = Math.floor(columnNumber / 26)
    };
    return result;
};

convertToTitle(columnNumber);

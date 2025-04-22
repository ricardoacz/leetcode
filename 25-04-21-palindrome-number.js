// https://leetcode.com/problems/palindrome-number/description/

// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

// Solution

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // A negative number cannot be a palindrome
    if (x < 0) return false
    // A number that ends with 0 unless is just 0 cannot be a palindrome
    if (x % 10 === 0 && x !== 0) return false

    // We are gonna take the last digits of x and add them to this variable
    let halfReversed = 0

    while (halfReversed < x) {
        // This is adding a new digit to our variable and making that digit the last digit of x
        halfReversed = halfReversed * 10 + (x % 10)
        // We remove the last digit of x and also remove the decimals
        x = Math.floor(x / 10)
    }

    // Now that we have the half, we return if x is equal to the half
    // In case it was an odd number, we remove the last digit of the half
    return x === halfReversed || x === Math.floor(halfReversed / 10)

};

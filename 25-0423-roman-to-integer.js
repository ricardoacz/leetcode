// https://leetcode.com/problems/roman-to-integer/description/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// Solution

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Convert string to array of letters
    const array = s.split("")
    // Convert roman numbers to integers
    const numbers = array.map((element) => {
        switch(element) {
            case "I":
                return 1
            break
            case "V":
                return 5
            break
            case "X":
                return 10
            break
            case "L":
                return 50
            break
            case "C":
                return 100
            break
            case "D":
                return 500
            break
            case "M":
                return 1000
            break
        }

    })  
        // debugging
        console.log("Array of numbers: ", numbers)
        // we store the sum in the result variable
        let result = 0
        // Logic for roman numbers
        for (let i = 0; i < numbers.length; i++) {
            // debugging
            console.log("Iteration: ", i, "result: ", result)

            // Core logic
            if (numbers[i] < numbers[i + 1] && i < numbers.length - 1) {
                result = result + (numbers[i + 1] - numbers[i])
                // we increase i to skip the next iteration
                i++
            } else {
                result = result + numbers[i]
            }
        }

        return result

};

// Turn roman number into an integer
// Return an integer
// romanToInt("III") -> 3

// Take the roman number, convert the string into an array
// Map array into integers
// Use a loop to evaluate the logic of the roman sum and save it in a variable

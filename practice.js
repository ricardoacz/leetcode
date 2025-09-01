// Simple Leetcode practice file.

// 2025-09-01.

  // https://leetcode.com/problems/palindrome-number

  /**
   * @param {number} x
   * @return {boolean}
   */
  var isPalindrome = function(x) {
      if (x < 0) {
          return false
      }
  
      let number = x
      let reverseNumber = 0
      let currentDigit = 0
  
      while (number > 0) {
          // We use modulus to get the last digit of the given number
          currentDigit = number % 10
          // We divide the number by 10 and round it. This removes last digit
          number = Math.floor(number / 10)
          // We create the reverse number by multiplying by 10 and adding the digit
          reverseNumber = (reverseNumber * 10) + currentDigit
          console.log('number afterwards:', number) 
      }
  
      console.log('Final reverse number:', reverseNumber)
  
      // Final check
      if (x === reverseNumber) {
          return true
      }
      else {
          return false
      }
  };
  
  // If integer X is true, a palindrome number exist, false otherwise
  
  // X = 121 -> true
  // X = -121 -> false
  // A negative number can't be a palindrome number
  // Use modulus operator to remove each digital from the right
  
  // 121 % 10 = 1
  // 12 % 10 = 2
  // 1 = 1

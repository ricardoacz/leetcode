// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//SOLUTION

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create object for the values of the array
    const elements = {}
    // create a loop for the array and start populating the object "elements" and see if any of the elements in it is the difference of the target
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        // check if the diff is in the elements object
        if (elements.hasOwnProperty(diff)) {
            // if true, return the index of the diff and i (which is the current index of the array we are checking)
            return [elements[diff], i]
        }
        // If no match is found, add the value and index to the object (property and value)
        elements[nums[i]] = i
    }
};

// Array of numbers, we have a target
// Sum of two numbers in the array reach the target
// We have to return the indices of those numbers in an array

// Example:
// twoSum([2,7,11, 15], 9) -> [0,1]

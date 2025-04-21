// https://leetcode.com/problems/3sum/description/

// Problem

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// Solution

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    const res = []

    nums = nums.sort((a,b) => a-b)
    console.log(`Sorted array of nums: ${nums}`)

    for (let i = 0; i < nums.length - 2; i++) {
        // Stop duplicates for i
        // We are checking in the second run if the previous number was the same
        if (nums[i] === nums[i - 1] && i > 0) {
            continue
        }
        // j is the pointer after i
        let j = i + 1
        // k is the pointer from the end of the array
        let k = nums.length - 1

        // Now we loop j and k to check the values
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            // console.log(`Indexes: i: ${i} j: ${j} k: ${k}`)
            // console.log(`Values: nums[i]: ${nums[i]} nums[j]: ${nums[j]} nums[k]: ${nums[k]}`)
            // console.log(`Sum: ${sum}`)

            // Conditions for the sum
            if (sum === 0) {
                // push array to array for response
                res.push([nums[i], nums[j], nums[k]])
                // console.log(`Response if a match is found: ${res}`)
                
                // Edge cases for duplicates within j and k
                // We check if the number to the right of j is the same
                // If it's the same, then we increase the index of j to skip it
                while (nums[j] === nums[j + 1]) j++
                // We check if the number to the left of k is the same
                // If it's the same, then we decrease the index of k to skip it
                while (nums[k] === nums[k - 1]) k--
                // After checking for duplicates, we still have to increase and decrease j and k
                // This is because a match was found, so we have to move on
                j++
                k--
            
            // Now to check if the sum was lesser than 0, then we increase j
            // This is because the array is sorted, so j is the low value number
            // We have to bring it up, because k is already the highest number
            } else if (sum < 0) {
                j++

            // Now if the sum is bigger than 0, we bring k down    
            } else {
                k--
            }
        }
    }

    return res
};


// Array of numbers
// Return arrays of three numbers that total 0
// Avoid duplicates

// Example:
// nums [-1,0,1,2,-1,-4]
// sorted array [-4, -1, -1, 0, 1, 2]
// return [[-1,0,1], [-1, -1, 2]]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const elements = {}

    for (let i = 0;  i < nums.length; i++) {
        const diff = target - nums[i]
        if (elements.hasOwnProperty(diff)) {
            return [elements[diff], i]
        } else {
            elements[nums[i]] = i
        }
    }
};

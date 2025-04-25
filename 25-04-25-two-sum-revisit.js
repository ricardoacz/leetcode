/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const object = {}
    const result = []

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (object.hasOwnProperty(diff)) {
            result.push(i, object[diff])
            return result
        } else {
            object[nums[i]] = i
        }
    }
};

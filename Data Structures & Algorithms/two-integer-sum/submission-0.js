class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let needed = target - nums[i];
            if (needed in map) {
                return [map[needed], i];
            }
            map[nums[i]] = i;
        }
    }
}

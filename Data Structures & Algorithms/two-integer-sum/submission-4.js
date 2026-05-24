class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();

        for (let index = 0; index < nums.length; index++) {
            let compliment = target - nums[index];
            if (numsMap.has(compliment)) {
                return [index, numsMap.get(compliment)];
            }
            numsMap.set(nums[index], index)
        }
    }
}

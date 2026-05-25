class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = [];
        const counts = {};
        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            counts[element] = (counts[element] || 0) + 1;
        }

        for (const num in counts) {
            bucket[counts[num]].push(parseInt(num));
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const item of bucket[i]) {
                result.push(item);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}

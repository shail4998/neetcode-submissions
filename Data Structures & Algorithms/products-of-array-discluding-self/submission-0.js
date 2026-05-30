class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * [1,2,4,6]
     * [1, 1, 2, 8]
     * [48, 24, 6, 1]
     *
     */

    productExceptSelf(nums) {
        const prefix = [];
        const suffix = Array.from({ length: nums.length }, () => 1);
        const result = [];
        let prefixProduct = 1;
        let suffixProduct = 1;
        for (let i = 0; i < nums.length; i++) {
            prefix.push(prefixProduct);
            prefixProduct *= nums[i];
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = suffixProduct;
            suffixProduct *= nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            result.push(prefix[i] * suffix[i]);
        }

        return result;
    }
}

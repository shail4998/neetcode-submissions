class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    uniqueKeyWithNoOfChar(s) {
        const count = new Array(26).fill(0);
        for (let char of s) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        return count.join("_");
    }

    groupAnagrams(strs) {
        const result = {};
        for (let s of strs) {
            const key = this.uniqueKeyWithNoOfChar(s);
            if (result[key]) {
                result[key].push(s);
            } else {
                result[key] = [s];
            }
        }

        return Object.values(result);
    }
}

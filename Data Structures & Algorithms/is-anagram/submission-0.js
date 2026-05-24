class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let length = s.length;
        const sObj = new Map();
        const tObj = new Map();
        for (let i = 0; i < length; i++) {
            if (sObj.has(s[i])) {
                const count = sObj.get(s[i]);
                sObj.set(s[i], count + 1);
            } else {
                sObj.set(s[i], 1);
            }
            if (tObj.has(t[i])) {
                const count = tObj.get(t[i]);
                tObj.set(t[i], count + 1);
            } else {
                tObj.set(t[i], 1);
            }
        }
        for (const [key] of sObj) {
            if (sObj.get(key) !== tObj.get(key)) {
                return false;
            }
        }

        return true;
    }
}

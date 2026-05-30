class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        strs.forEach((str) => {
            const length = str.length;
            encodedString += length + "#" + str;
        });
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const result = [];
        while (i < str.length) {
            let count = "";
            while (str[i] != "#") {
                count += str[i];
                i++;
            }
            let countInt = Number(count);
            let decodedStr = str.substring(++i, i + countInt);
            i += countInt;
            result.push(decodedStr);
        }

        return result;
    }
}

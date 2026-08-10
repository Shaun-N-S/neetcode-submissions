class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let str of strs) {
            res += `${str.length}#${str}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let pos = str.indexOf("#", i);
            let len = parseInt(str.slice(i, pos));
            i = pos + 1;
            let word = str.slice(i, i + len);
            res.push(word);
            i += len;
        }
        return res;
    }
}

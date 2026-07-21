class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let str of strs) {
            const count = new Array(26).fill(0);

            for (const ch of str) {
                count[ch.charCodeAt(0) - 97]++;
            }

            const key = count.join("#");
            console.log(key)
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }
        return Object.values(map);
    }
}

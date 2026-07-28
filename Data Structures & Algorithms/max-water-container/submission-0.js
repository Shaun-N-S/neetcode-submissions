class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAmount = 0;
        let lp = 0;
        let rp = heights.length - 1;

        while (lp < rp) {
            let width = rp - lp;
            let height = Math.min(heights[lp], heights[rp]);
            let currAmount = width * height;
            maxAmount = Math.max(maxAmount, currAmount);
            if (heights[lp] < heights[rp]) {
                lp++;
            } else {
                rp--;
            }
        }
        return maxAmount;
    }
}

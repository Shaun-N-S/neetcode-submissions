class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const num = board[i][j];
                if (num === ".") continue;

                const row = `r${i}-${num}`;
                const col = `c${j}-${num}`;
                const box = `b${Math.floor(i / 3) * 3 + Math.floor(j / 3)}-${num}`;

                if (set.has(row) || set.has(col) || set.has(box)) {
                    return false;
                }

                set.add(row).add(col).add(box);
            }
        }
        return true;
    }
}

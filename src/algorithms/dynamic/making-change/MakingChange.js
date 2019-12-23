/**
 * @param {Array} coinsYouHave
 * @param {number} changesWanted
 * @returns {number}
 */

export default function MakingChange(coinsYouHave, changesWanted) {
  const row = coinsYouHave.length;
  const column = changesWanted;

  const table = new Array(row).fill(0).map(() => new Array(column + 1).fill(0));

  for (let i = 0; i < row; i += 1) {
    for (let j = 1; j <= column; j += 1) {
      if (i === 0) table[i][j] = 1 + table[0][j - coinsYouHave[i]];
      else if (j < coinsYouHave[i]) table[i][j] = table[i - 1][j];
      else table[i][j] = Math.min(table[i - 1][j], 1 + table[i][j - coinsYouHave[i]]);
    }
  }
  return table;
}

/**
 * @param {number} n
 * @param {number} m
 * @returns {number | undefined}
 */
export default function binomialCoefficient(n, m) {
  if (m > n) return undefined;

  const table = [];

  for (let i = 0; i <= n; i += 1) {
    table[i] = [];

    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || i === j) table[i][j] = 1;
      else table[i][j] = table[i - 1][j - 1] + table[i - 1][j];
    }
  }
  return table[n][m];
}

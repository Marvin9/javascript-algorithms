import JS from '../jobScheduling';

const inputs = [
  {
    input: [[3, 3], [5, 1], [7, 3], [10, 1], [15, 1], [20, 3]],
    maxProfit: 42,
    sequence: [[15, 1], [7, 3], [20, 3]],
  },
  {
    input: [[20, 4], [10, 1], [40, 1], [30, 1]],
    maxProfit: 60,
    sequence: [[40, 1], [0, 0], [0, 0], [20, 4]],
  },
  {
    input: [[100, 2], [19, 1], [27, 2], [25, 1], [15, 3]],
    maxProfit: 142,
    sequence: [[27, 2], [100, 2], [15, 3]],
  },
  {
    input: [[0, 0]],
    maxProfit: 0,
    sequence: [],
  },
];

describe('Job Scheduling using greedy method', () => {
  it('should give maximum profit & correct job sequence', () => {
    inputs.forEach((input) => {
      const ans = JS(input.input);
      expect(ans.maxProfit).toBe(input.maxProfit);
      expect(ans.slots).toStrictEqual(input.sequence);
    });
  });
});

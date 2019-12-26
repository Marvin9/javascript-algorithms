import AS from '../ActivitySelection';

const inputs = {
  sorted: [
    {
      input: [[10, 20], [12, 25], [20, 30]],
      output: [[10, 20], [20, 30]],
    },
    {
      input: [[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]],
      output: [[1, 2], [3, 4], [5, 7], [8, 9]],
    },
  ],
  random: [
    {
      input: [[5, 9], [5, 7], [7, 10], [9, 11], [10, 15]],
      output: [[5, 7], [7, 10], [10, 15]],
    },
    {
      input: [[1, 10], [1, 8], [8, 10], [10, 11], [1, 2], [2, 3]],
      output: [[1, 2], [2, 3], [8, 10], [10, 11]],
    },
  ],
};

describe('Activity selection using greedy method', () => {
  it('should give the maximum number of activity list which can be completed (activities are sorted)', () => {
    inputs.sorted.forEach((input) => {
      const op = [...input.output];
      const testOp = AS(input.input);
      expect(op).toStrictEqual(testOp);
    });
  });

  it('should give the maximum number of activity list which can be completed (activities are not sorted)', () => {
    inputs.random.forEach((input) => {
      const op = [...input.output];
      const testOp = AS(input.input);
      expect(op).toStrictEqual(testOp);
    });
  });
});

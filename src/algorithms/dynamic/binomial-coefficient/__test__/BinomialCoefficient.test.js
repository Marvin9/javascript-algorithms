import BC from '../BinomialCoefficient';

const inputs = [
  {
    pair: [3, 2],
    answer: 3,
  },
  {
    pair: [7, 3],
    answer: 35,
  },
  {
    pair: [50, 10],
    answer: 10272278170,
  },
];

describe('Binomial Coefficient using Dynamic Programming', () => {
  it('should give correct output to the problem', () => {
    inputs.forEach((input) => {
      expect(BC(input.pair[0], input.pair[1])).toBe(input.answer);
    });
  });

  it('should return undefined of nCm if m > n', () => {
    expect(BC(2, 10)).toBeUndefined();
  });
});

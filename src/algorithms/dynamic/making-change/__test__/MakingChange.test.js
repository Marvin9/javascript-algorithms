import MakingChange from '../MakingChange';

describe('MakingChange using Dynamic Programming', () => {
  it('should give correct output to problem', () => {
    const coins1 = [1, 2, 3];
    const change1 = 4;

    const coins2 = new Array(50).fill(0).map((val, index) => index + 1); // [1, 2, 3, .... , 50]
    const change2 = 1275;

    expect(MakingChange(coins1, change1)).toBe(2);
    expect(MakingChange(coins2, change2)).toBe(26); // 50*25 + 25
  });

  it('should return 0 coins if there is only 1 coin provided and it\'value is 0', () => {
    expect(MakingChange([0], 1)).toBe(0);
  });
});

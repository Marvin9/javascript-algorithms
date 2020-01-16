import QuickUnion from '../quickUnion';

describe('Quick Find for dynamic connectivity', () => {
  it('should create array with given number of elements', () => {
    const q1 = new QuickUnion(5);
    const q2 = new QuickUnion(10);

    expect(q1.nodes.length).toBe(5);
    expect(q2.nodes.length).toBe(10);
  });

  it('should return false if two components are not connected', () => {
    const q = new QuickUnion(5);
    expect(q.connected(0, 1)).toBeFalsy();
    expect(q.connected(3, 4)).toBeFalsy();
  });

  it('should union components, also return true if inputed components are connected', () => {
    const q = new QuickUnion(5);
    q.union(0, 1);
    expect(q.connected(0, 1)).toBeTruthy();
    q.union(1, 3);
    q.union(1, 4);
    expect(q.connected(3, 4)).toBeTruthy();
  });
});

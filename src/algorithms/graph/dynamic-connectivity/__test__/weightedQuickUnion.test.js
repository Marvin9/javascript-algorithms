import WeightedQuickUnion from '../weightedQuickUnion';

describe('Improved quick union for dynamic connectivity', () => {
  it('should create array with given number of elements', () => {
    const q1 = new WeightedQuickUnion(5);
    const q2 = new WeightedQuickUnion(10);

    expect(q1.nodes.length).toBe(5);
    expect(q2.nodes.length).toBe(10);
  });

  it('should return false if two components are not connected', () => {
    const q = new WeightedQuickUnion(5);
    expect(q.connected(0, 1)).toBeFalsy();
    expect(q.connected(3, 4)).toBeFalsy();
  });

  it('should union components, also return true if inputed components are connected', () => {
    const q = new WeightedQuickUnion(5);
    q.union(0, 1);
    expect(q.connected(0, 1)).toBeTruthy();
    q.union(1, 3);
    q.union(1, 4);
    expect(q.connected(3, 4)).toBeTruthy();
  });

  it('should make correct tree', () => {
    const q = new WeightedQuickUnion(10);
    q.union(4, 3);
    q.union(3, 8);
    q.union(6, 5);
    q.union(9, 4);
    q.union(2, 1);
    q.union(5, 0);
    q.union(7, 2);
    q.union(6, 1);
    q.union(7, 3);

    const op = [6, 2, 6, 4, 6, 6, 6, 2, 4, 4];

    q.nodes.forEach((node, index) => {
      expect(node).toBe(op[index]);
    });
  });
});

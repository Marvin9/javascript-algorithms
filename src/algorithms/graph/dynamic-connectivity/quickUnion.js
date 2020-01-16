class QuickUnion {
  constructor(numberOfNodes) {
    this.nodes = new Array(numberOfNodes).fill(0).map((val, ind) => (ind));
  }

  root(i) {
    let node = i;
    while (this.nodes[node] !== node) node = this.nodes[node];
    return node;
  }

  connected(p, q) {
    return this.root(p) === this.root(q);
  }

  union(p, q) {
    const proot = this.root(p);
    const qroot = this.root(q);

    this.nodes[proot] = qroot;
  }
}

export default QuickUnion;

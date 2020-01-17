class WeightedQuickUnion {
  constructor(numberOfNodes) {
    this.nodes = new Array(numberOfNodes).fill(0).map((val, ind) => (ind));
    this.size = new Array(numberOfNodes).fill(1);
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
    const psize = this.size[p];
    const qsize = this.size[q];

    if (psize >= qsize) {
      this.nodes[qroot] = proot;
      this.size[proot] += this.size[qroot];
    } else {
      this.nodes[proot] = qroot;
      this.size[qroot] += this.size[proot];
    }
  }
}

export default WeightedQuickUnion;

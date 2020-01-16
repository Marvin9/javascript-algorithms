class QuickFind {
  constructor(numberOfNodes) {
    this.nodes = new Array(numberOfNodes).fill(0).map((val, ind) => (ind));
  }

  connected(p, q) {
    return this.nodes[p] === this.nodes[q];
  }

  union(p, q) {
    const pnode = this.nodes[p];
    const qnode = this.nodes[q];

    for (let i = 0, iBound = this.nodes.length; i < iBound; i += 1) {
      if (this.nodes[i] === pnode) this.nodes[i] = qnode;
    }
  }
}

export default QuickFind;

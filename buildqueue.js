class Queue {
  constructor() {
  this.data = [];
  }

  add (record) {
  this.data.unshift(record);
  }

  poping () {
  return this.data.pop();
  }
}

const a = new Queue();

a.add(1);
console.log(a);
a.add(2);
console.log(a);
a.add(3);
console.log(a);
console.log(a.poping());
console.log(a);

class Queue {
  constructor() {
  this.data = [];
  }

  add (record) {
  this.data.unshift(record);
  }

  remove () {
  return this.data.pop();
  }

  peek () {
  return this.data[this.data.length-1];
  }
}

const a = new Queue();

a.add(1);
console.log(a);
a.add(2);
console.log(a);
a.add(3);
console.log(a.peek());
console.log(a);
console.log(a.remove());
console.log(a);

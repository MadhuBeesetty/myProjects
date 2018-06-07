//creating a stack in java script

class Stack {
  constructor() {
  this.data = [];
  }

  add (record) {
  this.data.push(record);
  }

  peek () {
  return this.data[this.data.length-1];
  }

  pop () {
  return this.data.pop();
  }

}

const s = new Stack;

s.add(2);
s.add(3);
console.log(s);

console.log(s.pop());

console.log(s.pop());

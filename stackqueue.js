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
s.add(4);
s.add(5);
console.log(s);

//implementing stack using queue

const m =new Stack;

while (s.peek()) {
m.add(s.pop());
}

if(s.peek() == undefined) console.log(m.pop());


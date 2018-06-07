// build a third queue which takes elements from both the queues individually and keep them in third queue.

class Queue{
  constructor() {
    this.data = []
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

};

const a = new Queue;
a.add ('m');
a.add ('a');
a.add ('d');
a.add ('h');
a.add ('u');

const b = new Queue;
b.add ('2');
b.add ('8');

//using recursion

const weave =(first,second,c=new Queue) => {
  if (first.peek() === undefined && second.peek() === undefined) return c;
  if (first.peek()) c.add(first.remove());
  if (second.peek()) c.add(second.remove());
  return weave (first,second,c);
}

console.log(weave(a,b));

// doing the weave using loops

const weave1 = (first,second) => {

  const c = new Queue;

  while (first.peek() != undefined || second.peek() != undefined) {

    if(first.peek()){
      c.add(first.remove());
    };

    if(second.peek()){
      c.add(second.remove());
    };

  };

  return c;
};

console.log(weave1(a,b));


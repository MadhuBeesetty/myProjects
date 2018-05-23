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

const weave =(first,second,c=new Queue) => {
  if (first.peek() ==undefined && second.peek() == undefined) return c;
  if (first.peek() != undefined) c.add(first.remove());
  if (second.peek() != undefined) c.add(second.remove());
return weave (first,second,c);
}

console.log(weave(a,b));

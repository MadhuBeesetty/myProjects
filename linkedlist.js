// creating a linkedlist class and building linkedlist.

class Node {
  constructor(data, next) {
    this.date = data;
    this.next = next;
  }
}

class Linkedlist {
  constructor(){
  this.head = null;
  }
}

const a = new Node(5,null);
const b = new Node(6,a);
console.log(b);


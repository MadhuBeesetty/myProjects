//creating an empty simple linkedList

//Linked List has bunch of Nodes.

// A Node always has Two Parts they are a data part and Next-reference part.

// fist let me define a single a Node

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

var a = new Node(5);
var b = new Node(25, a);

console.log(b);

// linkedList always has a head which is like the first part of the linkedlist;

class linkedList {
  constructor() {
    this.head = null;
  }

  //inserting something into linkedlist at the beginning;
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  //inserting a node into linkedlist at the end;

  insertLast(data) {
    const node = new Node(data);
    let a = this.head;
    while (a.next) {
      a = a.next;
    }
    a.next = node;
  }

  //to find the size of the linkedlist;

  size() {
    let a = this.head;
    let counter = 0;
    while (a.next) {
      counter++;
      a = a.next;
    }
    return counter;
  }

  //get the data of the first node;

  getFirst() {
    let a = this.head;
    return a.data;
  }

  //get the data of the last node;

  getLast() {
    let a = this.head;
    while (a.next) {
      a = a.next;
    }
    return a.data;
  }

  //clear a linkedlist completely;

  clear() {
    this.head = null;
  }

  //just remove the first node from the linkedlist;

  RemoveFirst() {
    let a = this.head;
    let b = a.next;
    this.head = b;
  }

  //just remove the last node from the linkedList;

  RemoveLast() {
    let a = this.head;
    let b = a.next;
    while (b.next) {
      a = a.next;
      b = b.next;
    }
    a.next = null;
  }

  //get data at a particular index;

  getAt(index) {
    let counter = 0;
    let a = this.head;
    while (counter != index) {
      a = a.next;
      counter++;
    }
    return a.data;
  }

  //remove a node at particular index;

  removeAt(index) {
    let counter = 1;
    let a = this.head;
    let b = a.next;
    let c = b.next;
    while (counter != index) {
      a = a.next;
      b = a.next;
      c = b.next;
      counter++;
    }
    return (a.next = c);
  }

  //insert node at particular index;

  InsertAt(index, data) {
    let counter = 0;
    let a = this.head;
    let b = a.next;
    while (counter != index) {
      a = a.next;
      b = b.next;
      counter++;
    }
    const node = new Node(data);
    a.next = node;
    node.next = b;
  }
}

const lin = new linkedList();
lin.insertFirst(5);
lin.insertLast(10);
lin.insertLast(11);
lin.insertFirst(15);
lin.insertLast(20);
lin.InsertAt(1, 25);
console.log(lin.size());
console.log(lin.getFirst());
console.log(lin.getLast());
console.log(lin.getAt(1), 'i am getAt');
console.log(lin);
lin.removeAt(1);
console.log(lin);

const LinkedList = require('./LinkedList/LinkedList.js');

const Stack = require('./Stack/Stack.js');

console.log("===============Linked List==========");

const list = new LinkedList(false);
list.insertLast(5);
list.insertLast(7);
list.insertLast(20);
list.printList();
list.insertBefore(5, 10);
list.printList();
list.insertBefore(7, 500);
list.printList();
list.insertAfter(500, 40);
list.printList();
list.insertAfter(20, 40);

list.printList();
list.getListLength();

list.deleteNode(20);
list.printList();
list.deleteNode(10);
list.printList();
list.deleteNode(500);
list.printList();
list.deleteNode(500);
list.printList();
list.insertFirst(2000);
list.printList();

list.insertFirst(2001);

list.printList();
list.getListLength();
console.log("===============stack==========");

var stack = new Stack();
console.log("is Empty : ", stack.isEmpty());
stack.push(12);
stack.push(50);
stack.push(60);
stack.push(700);
stack.print();

console.log("stack size : ", stack.size());

console.log("stack peek : ", stack.peek());
console.log("stack POP : ", stack.pop());
console.log("stack Peek : ", stack.peek());

stack.print();


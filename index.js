const LinkedList = require('./LinkedList/LinkedList.js');

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
list.insertLast(5);
list.printList();


list.getListLength();


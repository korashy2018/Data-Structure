const LinkedList = require('../LinkedList/LinkedList.js');
module.exports = class Stack {
  #dataList;
  constructor(unique) {
    this.#dataList = new LinkedList(unique ?? false);
  }
  push(_data) {
    if (this.#dataList.alreadyExistNode(_data)) return;
    this.#dataList.insertFirst(_data);
  }
  pop() {
    var head = this.#dataList.head.data;
    this.#dataList.deleteHead();
    return head;

  }
  peek() {
    return this.#dataList.head.data;

  }
  size() {
    return this.#dataList.length;
  }

  isEmpty() {
    return this.#dataList.head == null;
  }
  print() {
    this.#dataList.printList();
  }
}
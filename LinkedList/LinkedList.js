class LinkedListNode {
  data;
  next;
  constructor(_data) {
    this.data = _data;
    this.next = null;
  }
}

class LinkedListIterator {
  currentNode;
  constructor(node) {
    this.currentNode = node;
  }
  data() {
    if (this.currentNode == null) return null;
    return this.currentNode.data;
  }
  next() {
    if (this.currentNode !== null) {
      this.currentNode = this.currentNode.next;
    }

    return this;
  }
  current() {
    return this.currentNode;
  }
}

module.exports = class LinkedList {
  head;
  tail;
  length;
  unique;
  constructor(_unique) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.unique = _unique ?? false;
  }
  
  //====================Helper Metthods start============
  begin()
  {
    return new LinkedListIterator(this.head);
  }
  
  printList()
  {
    var print_data = "";
    for (var itr = this.begin(); itr.current() != null; itr.next()) {
      var splitter = itr.current().next == null ? '' : "->";
      print_data += itr.data() + splitter ;
    }
    console.log(print_data);
  }
    notFound(_data)
  {
       console.log('no node found with this data -> '+_data);
   } 
  getListLength(){
    console.log('this list has '+this.length+' nodes');
  }
  find(_data)
  {
    for (var itr = this.begin(); itr.current() != null; itr.next()) {
      if (itr.current().data == _data) {
        return itr.current();
      }
    }
    return null;
  }
  
  findParent(node) 
  {
    for (var itr = this.begin(); itr.current() != null; itr.next()) {
      if (itr.current().next == node) {
        return itr.current();
      }
    }
    return null;
  }
  
  nodeExists(nodeData)
  {
    return this.find(nodeData) ? true : false;
  }



  alreadyExistNode(_data){
    if(this.unique && this.nodeExists(_data)){
      console.log('node ->'+_data + ' already exists')
      return true;
    }else{
      return false;
    }
  }
 
  
  //=========================Helpler methods end ======================//
  
  //================Opertations methods start ======================//
  insertFirst(_data)
  {
      if(this.alreadyExistNode(_data)){
        return;
      };
    var newNode = new LinkedListNode(_data);
    if(this.head == null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head.next;
      this.head = newNode;
    }
  
    this.length++;

    
  }
  insertLast(_data)
  {
      if(this.alreadyExistNode(_data)){
        return;
      };

    var newNode = new LinkedListNode(_data);
    if(this.head == null){
      this.head =newNode;
      this.tail =newNode;

    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  
  insertAfter(nodeData , _data)
  {
     if(this.alreadyExistNode(_data)){
        return;
      };
    var node = this.find(nodeData);
    var newNode = new LinkedListNode(_data);
     if(!node){
      this.notFound(nodeData);
       return null;
     }     newNode.next = node.next;
    node.next = newNode;
   if (this.tail == node) this.tail = newNode;
        this.length++;

  }
  
  insertBefore(nodeData,_data)
  {
     if(this.alreadyExistNode(_data)){
        return;
      };
    var node = this.find(nodeData);
    var newNode = new LinkedListNode(_data);
     if(!node){
      this.notFound(nodeData);
       return null;
     } 
    if(this.head == node){
      this.head = newNode;
      this.head.next = node;
    }else{
      var parentNode = this.findParent(node);
      parentNode.next = newNode;
      newNode.next = node;
    }
        this.length++;

  }
  deleteNode(nodeData){
     var node = this.find(nodeData);
     if(!node){
      this.notFound(nodeData);
       return null;
     }
    var parentNode = this.findParent(node);
    if(this.head == node){
      this.head = node.next;
    }else if(this.tail == node){
      this.tail == parentNode;
      this.tail.next = null;
    }else{
      parentNode.next = node.next;
    }
    node=null;
        this.length--;

  }
  deleteHead(){
    if(this.head == null) return;
    this.head = this.head.next;
    this.length--;

  }

  //================Opertations methods end ======================//
}

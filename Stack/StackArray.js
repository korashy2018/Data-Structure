module.exports = class StackArray {
  #dataList;
  #topIndex;
  #unique;
  constructor() {
    this.#dataList = [];
    this.#topIndex = -1;
  }
  push(_data) {
    this.#dataList.push(_data);
        this.#topIndex++;

  }
  pop() {
    if (this.#topIndex == -1) return;
    var head = this.#dataList.splice(this.#topIndex, 1)[0];
    this.#topIndex--;
    return head;


  }
  peek() {
    if (this.#topIndex == -1) return;
    return this.#dataList[this.#topIndex];

  }
  size() {
    return this.#dataList.length;
  }

  isEmpty() {
    return this.#dataList.length <= 0;
  }
  print() {
    var print_data = "";
    for (var i = this.#topIndex; i >= 0; i--) {
      var splitter = i <= 0 ? '' : ' -> '; 
      print_data += this.#dataList[i] +splitter;
    }
    console.log(print_data);
  }
}
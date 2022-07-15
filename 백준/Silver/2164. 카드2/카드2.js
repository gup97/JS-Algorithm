const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim();
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return newNode;
  }
  shift() {
    const targetNode = this.head;
    this.head = this.head.next;
    this.length--;
    return targetNode;
  }
}
const queue = new Queue();

for (const i in Array.from({ length: input })) {
  queue.push(+i + 1);
}

while (queue.length > 1) {
  queue.shift();
  queue.push(queue.shift().value);
}

console.log(queue.head.value);

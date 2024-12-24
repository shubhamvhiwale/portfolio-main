class QueueWithTwoStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    console.log("this.stack1 : ", this.stack1);

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        console.log("poped item : ", this.stack1.pop());
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const queue = new QueueWithTwoStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue()); // Output: 1

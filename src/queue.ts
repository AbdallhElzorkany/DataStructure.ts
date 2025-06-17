class Queue {
  private queue: any[] = [];
  constructor() {}
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  enqueue(item: any) {
    this.queue.push(item);
  }
  dequeue() {
    if (this.isEmpty()) return "queue is empty";
    return this.queue.shift();
  }
  peek() {
    if (this.isEmpty()) return "queue is empty";
    return this.queue[0];
  }
  display() {
    if (this.isEmpty()) return "queue is empty";
    this.queue.forEach((item) => console.log(item));
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.display();
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());
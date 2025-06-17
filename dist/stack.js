"use strict";
class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.stack.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    display() {
        if (this.isEmpty()) {
            return "Stack is Empty";
        }
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
    size() {
        return this.stack.length;
    }
}
const stack = new Stack();
console.log(stack.peek());
console.log(stack.isEmpty());
stack.push(20);
stack.push(50);
console.log(stack.pop());
stack.push(50);
console.log(stack.peek());
stack.display();
console.log(stack.size());

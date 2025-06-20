class DoublyListNode {
  public prev: DoublyListNode | null;
  public next: DoublyListNode | null;
  constructor(public val: number) {
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  public head: DoublyListNode | null = null;
  public tail: DoublyListNode | null = null;
  public length: number = 0;
  constructor() {}

  public insertLast(value: number) {
    if (!this.head) {
      this.head = new DoublyListNode(value);
      this.tail = this.head;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new DoublyListNode(value);
      temp.next.prev = temp;
      this.tail = temp.next;
    }
    this.length++;
  }
  public insertFirst(value: number) {
    let temp = new DoublyListNode(value);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
    } else {
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }
    this.length++;
  }

  public insertPosition(value: number, position: number) {
    if (!this.head) {
      this.head = new DoublyListNode(value);
      this.tail = this.head;
    } else if (position === 1) {
      let temp = new DoublyListNode(value);
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    } else if (this.length < position && this.tail) {
      let temp = new DoublyListNode(value);
      temp.prev = this.tail;
      this.tail.next = temp;
      this.tail = temp;
    } else {
      let temp: DoublyListNode | null = this.head;
      let node: DoublyListNode | null = new DoublyListNode(value);
      let prev: DoublyListNode;
      let now: number = 1;
      while (temp !== null && now <= position) {
        if (now + 1 === position) {
          prev = temp;
          if (prev.next) {
            prev.next.prev = node;
          }
          node.next = temp.next;
          node.prev = temp;
          temp.next = node;
        }
        temp = temp.next;
        now++;
      }
    }
    this.length++;
  }
  public delete(value: number) {
    if (this.length === 0) {
      return `there is nothing to delete.`;
    } else {
      if (this.head?.val === value) {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        this.length--;
        return `${value} Deleted`;
      } else if (this.tail?.val === value) {
        if (this.tail.prev) {
          this.tail.prev.next = null;
          this.tail = this.tail.prev;
          this.length--;
          return `${value} Deleted`;
        }
      } else {
        let temp = this.head;
        let prev = new DoublyListNode(0);
        while (temp !== null) {
          if (temp.val === value) {
            prev.next = temp.next;
            temp = temp.next;
            if (temp?.val) {
              temp.prev = prev;
            }
            this.length--;
            return `${value} Deleted`;
          }
          prev = temp;
          temp = temp.next;
        }
      }
      return "Not Found";
    }
  }
  public modify(value: number, position: number): string {
    let result: string = "";
    if (this.length === 0 || position > this.length) {
      result = `Node ${position} Not Found`;
    } else {
      let temp = this.head;
      let now: number = 1;
      while (temp !== null) {
        if (position === now) {
          temp.val = value;
          result = `Node ${position} Modified To ${value}`;
        }
        temp = temp.next;
        now++;
      }
    }
    return result;
  }
  public find(value: number): boolean {
    if (this.length === 0) {
      return false;
    } else {
      let temp = this.head;
      while (temp !== null) {
        if (temp.val === value) {
          return true;
        }
        temp = temp.next;
      }
      return false;
    }
  }

  public print() {
    if (this.length === 0) {
      console.log("Linked List Is Empty");
    } else {
      let temp = this.head;
      while (temp !== null) {
        console.log(temp.val);
        temp = temp.next;
      }
    }
  }
  public printReverse() {
    if (this.length === 0) {
      console.log("Linked List Is Empty");
    } else {
      let temp = this.tail;
      while (temp !== null) {
        console.log(temp.val);
        temp = temp.prev;
      }
    }
  }
  public deletePosition(position: number) {
    if (this.length === 0) {
      return `there is nothing to delete.`;
    } else {
      if (position === 1 && this.head) {
        if (this.head.next) {
          this.head.next.prev = null;
          this.head = this.head.next;
        } else {
          this.head = null;
          this.tail = this.head;
        }
        this.length--;
        return `Node ${position} Deleted`;
      } else if (this.length === position && this.tail) {
        if (this.tail.prev) {
          this.tail.prev.next = null;
          this.tail = this.tail.prev;
          this.length--;
          return `Node ${position} Deleted`;
        }
      } else {
        let temp = this.head;
        let prev = new DoublyListNode(0);
        let now: number = 1;
        while (temp !== null) {
          if (now === position) {
            prev.next = temp.next;
            temp = temp.next;
            if (temp?.val) {
              temp.prev = prev;
            }
            this.length--;
            return `${position} Deleted`;
          }
          prev = temp;
          temp = temp.next;
          now++;
        }
      }
    }
    return `Not Found`;
  }
}
let dll = new DoublyLinkedList();
dll.insertLast(10);
dll.insertLast(20);
dll.insertLast(30);
dll.insertLast(40);
// dll.insertLast(50);
// dll.insertPosition(1, 1);
console.log(dll.deletePosition(5));
console.log(dll.length);
dll.print();
console.log("===============");
dll.printReverse();

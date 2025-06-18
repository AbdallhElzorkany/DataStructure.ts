class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  public head: ListNode | null;
  public length: number = 0;
  constructor() {
    this.head = null;
  }

  public insert(value: number): void {
    if (this.head === null) {
      this.head = new ListNode(value);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new ListNode(value);
    }
    this.length++;
  }
  public print(): void {
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
  public find(value: number): boolean {
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
  public insertFirst(value: number): void {
    let temp = this.head;
    this.head = new ListNode(value);
    this.head.next = temp;
    this.length++;
  }
  public insertPosition(value: number, position: number) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else if (position === 1) {
      let temp = this.head;
      this.head = new ListNode(value);
      this.head.next = temp;
    } else if (this.length < position && this.head) {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new ListNode(value);
    } else {
      let temp = this.head;
      let prev = new ListNode(0);
      let now: number = 1;
      while (temp !== null && now <= position) {
        if (now + 1 === position) {
          prev = temp;
          temp = temp.next;
          prev.next = new ListNode(value);
          prev = prev.next;
          prev.next = temp;
          break;
        }
        temp = temp.next;
        now++;
      }
    }
    this.length++;
  }
  public delete(value: number): string {
    if (this.length === 0) {
      return "Not Found";
    } else if (this.head?.val === value) {
      this.head = this.head.next;
      this.length--;
      return `${value} Deleted`;
    } else {
      let temp = this.head;
      let prev = new ListNode(0);
      while (temp !== null) {
        if (temp.val === value) {
          prev.next = temp.next;
          this.length--;
          return `${value} Deleted`;
        }
        prev = temp;
        temp = temp.next;
      }
    }
    return "Not Found";
  }
  public deletePosition(position: number): string {
    if (position > this.length) {
      return `Node ${position} Is Not Found`;
    } else if (position === 1 && this.head) {
      this.head = this.head.next;
      this.length--;
      return `Node ${position} Deleted`;
    } else {
      let temp = this.head;
      let prev = new ListNode(0);
      let now: number = 1;
      while (temp !== null) {
        if (now === position) {
          prev.next = temp.next;
          this.length--;
          return `${position} Deleted`;
        }
        prev = temp;
        temp = temp.next;
        now++;
      }
    }
    return "Not Found";
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
  reverse(): void {
    let prev = null;
    let curr: ListNode | null = this.head;
    let next = null;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

let l = new LinkedList();
l.insert(10);
l.insert(20);
l.insert(30);
l.insert(40);

l.print();
console.log("=======");
l.reverse();
l.print();
console.log(l.length);

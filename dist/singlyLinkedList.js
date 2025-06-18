"use strict";
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    insert(value) {
        if (this.head === null) {
            this.head = new ListNode(value);
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new ListNode(value);
        }
        this.length++;
    }
    print() {
        if (this.length === 0) {
            console.log("Linked List Is Empty");
        }
        else {
            let temp = this.head;
            while (temp !== null) {
                console.log(temp.val);
                temp = temp.next;
            }
        }
    }
    find(value) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.val === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    insertFirst(value) {
        let temp = this.head;
        this.head = new ListNode(value);
        this.head.next = temp;
        this.length++;
    }
    insertPosition(value, position) {
        if (this.length === 0) {
            this.head = new ListNode(value);
        }
        else if (position === 1) {
            let temp = this.head;
            this.head = new ListNode(value);
            this.head.next = temp;
        }
        else if (this.length < position && this.head) {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new ListNode(value);
        }
        else {
            let temp = this.head;
            let prev = new ListNode(0);
            let now = 1;
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
    delete(value) {
        var _a;
        if (this.length === 0) {
            return "Not Found";
        }
        else if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.val) === value) {
            this.head = this.head.next;
            this.length--;
            return `${value} Deleted`;
        }
        else {
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
    deletePosition(position) {
        if (position > this.length) {
            return `Node ${position} Is Not Found`;
        }
        else if (position === 1 && this.head) {
            this.head = this.head.next;
            this.length--;
            return `Node ${position} Deleted`;
        }
        else {
            let temp = this.head;
            let prev = new ListNode(0);
            let now = 1;
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
    modify(value, position) {
        let result = "";
        if (this.length === 0 || position > this.length) {
            result = `Node ${position} Not Found`;
        }
        else {
            let temp = this.head;
            let now = 1;
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
    reverse() {
        let prev = null;
        let curr = this.head;
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

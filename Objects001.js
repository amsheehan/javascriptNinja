// Object-Oriented Javascript 

// Node constructor
function Node(next, data) {
    // All instances will have their own copy of these properties
    this.next = next;
    this.data = data;
}

// LinkedList Constructor
function LinkedList(head) {
    // All instances of a LinkedList will have their own head, duh!
    this.head = head;
}

// The method displayList() is shared by all instances

LinkedList.prototype.displayList = function () {
    var current = this.head;
    while (current) {
        console.log(current);
        current = current.next;
    }
}

// The property 'creator' is shared by all instances

LinkedList.prototype.creator = "The JavaScript Ninja";

// create the nodes
var first = new Node(null, 10);
var second = new Node(null, 20);
var third = new Node(null, 30);

first.next = second;
second.next = third;

// Create the linked list
var myList = new LinkedList(first);
myList.displayList();
/* Output
* ({next:{next:{next:null, data:30}, data:20}, data:10})
* ({next:{next:null, data:30}, data:20})
* ({next:null, data:30})
*/

// Pseudo-Classical Inheritance
// Create a doubly linked list that inherits from linked list

function DoubleNode(previous, next, data) {
    // call the Node constructor inside this constructor
    Node.call(this, next, data);
    this.previous = previous;
}

function DoublyLinkedList(head) {
    //call the LinkedList constructor
    LinkedList.call(this, head);
}

// Inherit the 'displayList()' method and the 'creator' property
DoublyLinkedList.prototype = new LinkedList();

// create the nodes
var dFirst = new DoubleNode(null, null, 100);
var dSecond = new DoubleNode(null, null, 200);
var dThird = new DoubleNode(null, null, 300);

dFirst.next = dSecond;
dSecond.previous = dFirst;
dSecond.next = dThird;
dThird.previous = dSecond;

// create the list

var myDoublyLinkedList = new DoublyLinkedList(dFirst);
myDoublyLinkedList.displayList();

// Output
// ({next:{next:{next:null, data:300, previous:{}}, data:200, previous:{}}, data:100, previous:null})
// ({next:{next:null, data:300, previous:{}}, data:200, previous:{next:{}, data:100, previous:null}})
// ({next:null, data:300, previous:{next:{}, data:200, previous:{next:{}, data:100, previous:null}}})

console.log(myDoublyLinkedList.creator);
// The JavaScript Ninja
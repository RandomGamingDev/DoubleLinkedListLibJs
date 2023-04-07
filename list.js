let DoubleLinked = {}
DoubleLinked.Node = class {
	constructor(data = null, before = null, next = null) {
		this.data = data;
		this.before = before;
		this.next = next;
	}

	clone() {
		return new DoubleLinked.Node(this.data, this.before, this.next);
	}
}

DoubleLinked.List = class {
	constructor() {
		this.head = new DoubleLinked.Node();
		this.tail = this.head;
		this.length = 0;
	}

	push(data) {
	    this.length++;
	    if (this.length == 1) {
	      this.head = new DoubleLinked.Node(data);
	      this.tail = this.head;
	      return;
	    }
	    this.tail.next = new DoubleLinked.Node(data);
		this.tail.next.before = this.tail;
	    this.tail = this.tail.next;
	}

	insert_head(data) {
		this.length++;
		let oldHead = this.head;
		this.head = new Linked.Node(data);
		this.head.next = oldHead;
		oldHead.before = this.head;
	}
	  
	insert(node, data) {
		this.length++;
		let next = node.next;
		node.next = new Linked.Node(data);
		node.next.before = node;
		node.next.next = next;
		next.before = node.next;
	}

	append(list) {
		for (let i = list.head; i != null; i = i.next)
			this.push(i.value);
	}

	erase_head() {
		this.length--;
		if (length == 0) {
		  this.head = new Linked.Node();
		  this.tail = this.head;
		  return;
		}
		this.head = this.head.next;
		this.head.before = null;
	}

	erase(node) {
		node.before.next = node.next;
		if (node == this.tail)
			this.tail = this.node.before;
		else
			node.next.before = node.before;
		this.length--;
	}

	clear() {
		this.length = 0;
		this.head = new Linked.Node();
		this.tail = this.head;
	}
	
	ind(i) {
		let toReturn = this.head;
		for (; i > 0; i--)
			toReturn = toReturn.next;
		return toReturn;
	}
}

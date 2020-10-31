class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head=null;
    }
    addNodeAtFirst(data) {
        const newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head=newNode;
    }
    addNodeAtLast(data) {
        const newNode = new LinkedListNode(data);
        if(this.head) {
            let current = this.head;
            while(current.next!==null) {
                current=current.next;
            }
            current.next = newNode;
        }else {
            this.head = newNode;
        }
    }
    addNodeAtIndex(data, index) {
        const newNode = new LinkedListNode(data);
        if(this.head) {
            if(index===1) {
                newNode.next=this.head;
                this.head = newNode;
            }else {
                let current = this.head;
                let k=1;
                let positionNode;
                while(current!==null && k<index){
                    k++;
                    positionNode=current;
                    current=current.next;
                }
                newNode.next = positionNode.next;
                positionNode.next = newNode;
            }
        }else {
            this.head = newNode;
        }
    }

    deleteFirst() {
        let deleted;
        if(this.head) {
            deleted = this.head;
            this.head = this.head.next;
        }
        return deleted.data;
    }

    deleteLast() {
        if(this.head) {
            if(this.head.next==null) {
                this.head=null;
                return;
            }
            let current = this.head;
            let last = this.current;
            let secondLast = this.head;
            while(current.next!==null) {
                secondLast = current;
                last=current.next;
                current=current.next;
            }
            console.log(`deleted Element: ${last.data}`);
            secondLast.next=null;
        }
    }
    deleteAtIndex(index) {
        if(this.head) {
            if(index==1) {
                console.log(`deleted Element: ${this.head.data}`);
                this.head = this.head.next;
                return
            }
            let k=1;
            let current = this.head;
            let positionNode;
            while(current!==null && k<index) {
                k++;
                positionNode=current;
                current=current.next;
            }
            if(current==null) {
                console.log('posiiton does not exists');
            }else {
                positionNode.next = current.next;
            }
        }
    }
    displayList() {
        console.log('display list');
        let current = this.head;
        while(current!==null) {
            console.log(current.data);
            current=current.next;
        }
    }
    reverseLinkedList() {
        let nextNode = null, temp = null;
        while(this.head) {
            nextNode = this.head.next;
            this.head.next = temp;
            temp = this.head;
            this.head = nextNode
        };
        this.head = temp;
    }

    reversePairWise() {

    }
}

function reversePairWiseRecursive(head) {
    let temp;
    if(head==null || head.next==null) {
        return;
    }else {
        // reverse first pair;
        temp = head.next;
        head.next = temp.next;
        temp.next = head;
        head = temp;
    }
}
exports.LinkedList = LinkedList;

// const linkedList = new LinkedList();
// linkedList.addNodeAtFirst(5);
// linkedList.addNodeAtFirst(2);
// linkedList.addNodeAtFirst(3);
// linkedList.addNodeAtLast(6);
// linkedList.displayList();
// linkedList.addNodeAtIndex(9,3);
// linkedList.displayList();
// console.log('before delete');
// linkedList.deleteLast();
// console
// linkedList.reverseLinkedList();
// linkedList.displayList();


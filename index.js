class _Node {
    constructor(value, next) {
        // stores value
        this.value = value;
       // stores address of next node
        this.next = next;
    }
}


class LinkedList {

    constructor () {
        this.head = null;
    }
    insertFirst(item) {
        // create new node item and point head to new node
        this.head = new _Node(item, this.head)
    }
    insertLast(item){
        // check to see if this is the first item, if it is, use the insertFirst method
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null){
                // this moves thru the list until you reach the end of the list
                tempNode = tempNode.next;
            }
            // set the end nodes next pointer to the new node
            // the new nodes next pointer is null indicating it is the last node
            tempNode.next = new _Node(item, null)
        }
    }
    insertBefore(item, existingItem){
        if(this.head === null){
            this.insertFirst(item)
        }
        else {
            let currNode = this.head;
            let previousNode = this.head;
            while((currNode !== null) && (currNode.value !== existingItem)){
                previousNode = currNode;
                currNode = currNode.next;
            }
            if (currNode === null){
                return ('Item not found');
            }
            previousNode.next = new _Node(item, currNode)

        }
    }
    insertAfter(item, existingItem){
        if(this.head === null){
            this.insertFirst(item)
        }
        else{
            let currNode = this.head;
            let previousNode = this.head;
            while((currNode !== null) && (currNode.value !== existingItem)){
                previousNode = currNode;
                currNode = currNode.next;
            }
            if (currNode == null){
                return ('Item not found');
            }
            const nextItem = currNode.next
            currNode.next = new _Node(item, nextItem )
        }
    }
    find(item){
        // start at the head
        let currNode = this.head;
        // if list is empty return null
        if (!this.head) {
            return null
        }
        while (currNode.value !== item){
            //Return null if its the nedo f the list and the item is not on the list
            if (currNode.next === null){
                return null;
            }
            else {
                //otherwise, kepe looking
                currNode = currNode.next
            }
            //when found
            return currNode;
        }
    }
    remove(item){
        // if list is empty
        if (!this.head){
            return null;
        }
        // if node to be removed is the head, make the next 
        //node head
        if (this.head.value === item){
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)){
            // save the previous node, and work your way thru the list
            previousNode = currNode;
            currNode = currNode.next
        }
        // if you worked thru the list and reached null, return item not found
        if (currNode === null){
            console.log('Item not found')
            return;
        }
        // make the previous nodes next the node you are about to remove's next
        previousNode.next = currNode.next
    }
}

function main(){
    const SLL = new LinkedList;
    SLL.insertFirst('Apollo');
    const items = ['Boomer', 'Helo', 'Huster', 'Starbuck']
    items.forEach(item =>{
        SLL.insertLast(item);
    })
    console.log(SLL)
    items.forEach(item => {
        SLL.find(item)
        // console.log(item)
    })
    // SLL.remove('Huster')

    // console.log(SLL.find('Huster'))
    SLL.insertBefore('Before', 'Boomer')
    // console.log(SLL)
    SLL.insertAfter('After', 'Before')
    // console.log(SLL.find('Before'))
    display(SLL)
    size(SLL)
    isEmpty(SLL)
    previousItem(SLL, 'After')
    lastItem(SLL)
    thirdFromLast(SLL)
}

main();
// returns the size of linked list
function size(list){
    let count = 0;
    let currNode = list.head;
    while(currNode !== null){
        currNode = currNode.next
        count++
    }
    console.log(count);
}
// displays the linked list
function display(list){
    let currNode = list.head
    
    while (currNode !== null){
        currNode = currNode.next;
        console.log(currNode);
    }
}

// checks if list is empty
function isEmpty(list){
    if (!list.head){
        console.log('list is empty')
    } else{
        console.log('list is not empty')
    }
}

function previousItem(list, itemValue){
    let currNode = list.head;
    let previousNode = list.head;
    while((currNode !== null) && (currNode.value !== itemValue )){
        previousNode = currNode;
        currNode = currNode.next;
    }
    if( currNode === null){
        console.log('item not found')
    }
    console.log(previousNode.value)
}

function lastItem(list){
    if (list.head === null){
        console.log('no items in the list')
    }
    let currNode = list.head;
    let previousNode = list.head;
    while(currNode !== null){
        previousNode = currNode;
        currNode = currNode.next;
    }
    console.log(previousNode)
}

function thirdFromLast(list){
    let count = 0;
    const length = list => {
        let currNode = list.head;
        while(currNode !== null){
            currNode = currNode.next
            count++
        }
    return count;
    }
    const listLength = length()
    console.log(`list length is ${listLength}`)
    let listNumber = 0;
    let currNode = list.head;
    let previousNode = list.head;
    while (listNumber < (count - 3)){
        previousNode = currNode;
        currNode = currNode.next;
        listNumber++
    }
    console.log(currNode);

}


//min = head
// keep assigning min when number is less than min
// while head.value !== min keep iterating thru the list


function sortList(list){
    let min = list.head;
    let currNode = list.head;
    let previousNode = list.head;
    while(currNode !== null){
        previousNode = currNode;
        currNode = currNode.next
        if (previousNode.value > currNode.value){
            previousNode = currNode;
            currNode = previousNode
        }
        if (previousNode.value < min){
            min = previousNode.value
        }
        while(list.head.value !== min ){
            sortList(list)
        }
    }
}
function createLinkedList(){
    this.tail = null
    this.head = null
    this.size = 0


    
    function append(value){
        if(this.size === 0){
            this.tail = value
            this.head = value


        }
        else{
            this.tail.next = value
            this.tail = value
        }
        this.size++
    }
    function prepend(value){
        if(this.size === 0){
            append(value)
        }
        else{
            let oldHead = head
            this.head = value
            this.head.next = oldHead
        }
        this.size++
    }

    function at(index){
        if(index > this.size){
            return -1
        }
        else{
        let i = 0
        let currentNode = this.head
        while(i < index - 1){
            currentNode = currentNode.next
            i++
        }
        return currentNode
    }
    }
    function pop(){
        let secondToLast = at(this.size - 1)
        console.log('secondToLast '  + secondToLast)
        let oldtail = this.tail
        this.tail = secondToLast
        this.tail.next = null


        this.size--
        return oldtail
    }

    function contains(value){

    }
    function find(value){

    }
    function toString(){
        return this.head
    }
    function insertAt(value, index){

    }
    function removeAt(index){

    }
    return {
        tail,
        head,
        size,
        append,
        prepend,
        toString,
        at,
        pop,
    }
}

function Node(value = null, next = null){
    return {
        value, next
    }
}
let linkedlist = createLinkedList()


linkedlist.append(Node(0))
linkedlist.append(Node(1))
linkedlist.append(Node(2))
linkedlist.append(Node(3))
linkedlist.append(Node(4))
linkedlist.append(Node(5))
linkedlist.append(Node(6))
linkedlist.append(Node(7))


console.log(linkedlist.pop())
console.log(linkedlist.size)
console.log(linkedlist.tail)
console.log(linkedlist.toString())
//console.log(linkedlist.at(8))

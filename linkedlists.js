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
            this.append(value)
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
            console.log('INDEX: ' + index + ' SIZE ' + this.size)
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
        console.log(this.size)
        let secondToLast = this.at(this.size - 1)
        console.log(this.size)
        console.log('secondToLast '  + secondToLast.value)
        let oldtail = this.tail
        this.tail = secondToLast
        this.tail.next = null


        this.size--
        return oldtail
    }

    function contains(value){

        if(this.size == 0){
            return false
        }
        else{
            let currentNode = this.head
            while(currentNode !== null){
                if(currentNode.value === value){
                    return true
                }
                currentNode = currentNode.next
            }
            return false

        }

    }
    function find(value){
        if(this.size === 0){
            return -1
        }
        else{
        
        let currentNode = this.head
        for(let i = 0; i < this.size || currentNode !== null; i++){
            if(currentNode.value === value){
                return i
            }
            currentNode = currentNode.next
        }
        return -1
    }
    }
    function toString(){
        if(this.size == 0){
            return ''
        }
        else{
            let nodeValue = []
            let currentNode = this.head
            while(currentNode !== null){
                nodeValue.push(currentNode.value)
                currentNode = currentNode.next
            }
            return nodeValue.join(' -> ')

        }
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
        contains,
        find,
        toString,
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


console.log(linkedlist.size)
console.log(linkedlist.tail)
console.log(linkedlist.toString())
//console.log(linkedlist.at(8))

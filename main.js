 
 




class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
   constructor(){
       this.head = null;
       this.size=0;
   }


add(value){
    var node = new Node(value);
    var curr;
    if(this.head == null){
        this.head = node;
    }else{
        curr = this.head;
        while(curr.next!= null){
            curr = curr.next;
        }
        curr.next = node;
    }

    this.size++
}


insertAt(value,index){
    if(index<0 || index>this.size){
        console.log("Please Enter the Valid Index !");
    }else{
        const node = new Node(value);
        var curr,prev;
        curr = this.head;
        if(index == 0){
            node.next = this.head;
            this.head = node;
        }else{
            curr = this.head;
            let count=0 ;
            while(count<index){
                count++;
                prev = curr;
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}


removeFrom(index){
    if(index<0 || index>this.size){
        console.log("Please Enter the Valid Index !")
    }else{
        var curr ,prev,count=0;
        curr = this.head;
        prev=curr;
        if(index===0){
            this.head = curr.next;

        }else{
            while(count<index){
                count++;
                prev=curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
        return curr.value;
    }
}




printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.value + " ";
        curr = curr.next;
    }
    console.log(str);
}

}


const ll = new LinkedList();
ll.add(2);
ll.add(4);
ll.add(7);
ll.add(12);
ll.add(34);
ll.add(67);
ll.add(45);
ll.add(9);
ll.printList()
// console.log(ll.printList())
ll.insertAt(23,4);
ll.printList();

ll.removeFrom(2);
ll.printList();











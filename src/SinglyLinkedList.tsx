import React from 'react'

class SinglyLinkedList extends React.Component{
    render(){
        return <h1>This is the singly linkedlist page</h1>
    }

}

class LinkedList {
    constructor();
    constructor(array:number[]);
    constructor(...my_arr:any[]){
        if(my_arr.length===1){
            my_arr[0].map((value:number, key:number) => {key===0?this.list.push(new node(my_arr[0][key])):this.list.push(new node(my_arr[0][key], this.list[key-1]))})
        }
    }
    list:node[] = []

    push = (value:number) => {
        this.list.length===0?this.list.push(new node(value)):this.list.push(new node(value, this.list[this.list.length - 1]))
    }
}

class node {
    constructor(value:number);
    constructor(value:number, previous_node:node);
    constructor(...my_arr:any[]) {
        this.value = my_arr[0]
        this.pntr = new system().generateMemoryAddr()
        if(my_arr.length===2){
            my_arr[1].nextPntr = this.pntr
        }
    }

    pntr = NaN
    value = NaN
    nextPntr = NaN
}

class system {
    utilizedLocations:number[] = []
    generateMemoryAddr = () => {
        let addr = Math.floor(Math.random()*10000)
        this.utilizedLocations.forEach((value:number) => addr===value?this.generateMemoryAddr:{})
        return addr
    }
}

let linkedlist1 = new LinkedList([35, 6, 2, 9, 345, 1, 3, 0, 9])
linkedlist1.push(980)
console.log(linkedlist1.list)

let linkedlist2 = new LinkedList()
linkedlist2.push(765)
console.log(linkedlist2.list)

export default SinglyLinkedList;
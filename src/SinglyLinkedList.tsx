import React from 'react'

class SinglyLinkedList extends React.Component{
    render(){
        return <h1>This is the singly linkedlist page</h1>
    }

}

class node {
    constructor(value:number);
    constructor(value:number, previous_node:node);
    constructor(...my_arr:any[]) {
        this.value = my_arr[0]
        this.pntr = Math.floor(Math.random()*10000)
        if(my_arr.length===2){
            my_arr[1].nextPntr = this.pntr
        }
    }

    pntr = NaN
    value = NaN
    nextPntr = NaN

    displayValues = () => {console.log("value: " + this.value + ", pointer: " + this.pntr + ", next pointer: " + this.nextPntr)}
}

let arr = [35, 6, 2, 9, 345, 1, 3, 0, 9]
let obj_arr:node[] = []
arr.map((value:number, key:number) => {key===0?obj_arr.push(new node(value)):obj_arr.push(new node(value, obj_arr[key-1]))})
console.log(obj_arr)

export default SinglyLinkedList;
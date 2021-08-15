import { useState } from "react"

export default function Queues(){
    let arr = [3, 4, 6, 8, 1, 3, 5]
    const [queue, setQueue] = useState(arr)
    const firstElement = queue[0]
    return (
        <div>
            {queue.map((value:number, key:number) => <p key={key}>{value}, </p>)}
            <br />
            <br />
            <div className="row">
                <div className="column">
                    <input type="text" />
                    <button onClick={() => enqueue(queue, setQueue)}>Enqeue</button>
                </div>
                <div className="column"> 
                    <p>{firstElement}</p>
                    <button onClick={() => dequeue(queue, setQueue)}>Deqeue</button>
                </div>
            </div>
        </div>
    )
}

function dequeue(queue:any, setQueue:any) {
    let temp_arr:number[] = []
    queue.map((value:number, key:number) => {key===0?console.log("first item removed"):temp_arr.push(value)})
    setQueue(temp_arr)
}

function enqueue(queue:any, setQueue:any) {
    let temp_arr = Object.assign([], queue)
    let value = document.getElementsByTagName('input')[0].value
    value===''?alert('Please enter an number'):isNaN(+value)?alert('Not a number'):temp_arr.push(+value)
    setQueue(temp_arr)    
}
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
                    <button>Enqeue</button>
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
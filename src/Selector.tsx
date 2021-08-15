import Stacks from './Stacks'
import Counter from './Counter'
import Queues from './Queues'
import { useState } from 'react'

export default function Selector(){
    const [selection, setSelection] = useState(<Queues />)
    return (
        <div>
            <label>Please select an option: </label>
            <select onChange={(e) => onChangeFunc(e, setSelection)}>
                <option>Queues</option>
                <option>Stacks</option>
                <option>Counter</option>
            </select>
            <br/>
            <br/>
            {selection}
        </div>
    )
}

function onChangeFunc(e:any, funct:any){
    e.target.value==='Stacks'?funct(<Stacks />): 
    e.target.value==='Counter'?funct(<Counter />): 
    e.target.value==='Queues'?funct(<Queues />):
    console.log('Invalid Selection')
}